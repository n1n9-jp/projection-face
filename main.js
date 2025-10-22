var ratio = window.devicePixelRatio || 1,
    width = 960 * ratio,
    height = 450 * ratio;

var menu = d3.select("#projection-menu")
    .on("change", change);

menu.selectAll("option")
    .data(options)
  .enter().append("option")
    .text(function(d) { return d.name; });

var projection = options[0].projection;

options.forEach(function(option) {
  option.projection
      .translate([width / 2, height / 2])
      .scale(option.projection.scale() * ratio)
      .clipExtent([[2 * ratio, 2 * ratio], [width - 2 * ratio, height - 2 * ratio]]);
});

var graticule = d3.geo.graticule()(),
    face,
    boundaries;

var canvas = d3.select("#map").append("canvas")
    .attr("width", width)
    .attr("height", height)
    .style("width", width / ratio + "px")
    .style("height", height / ratio + "px");

var context = canvas.node().getContext("2d");
context.fillStyle = "#f9f9f9";
context.strokeStyle = "#000";

var path = d3.geo.path()
    .projection(projection)
    .context(context);

setInitialProjection();

function change() {
  update(options[this.selectedIndex]);
}

function pathTween(projection0, projection1) {
  var t = 0,
      projection = d3.geo.projection(function(λ, φ) {
          λ *= 180 / Math.PI, φ *= 180 / Math.PI;
          var p0 = projection0([λ, φ]), p1 = projection1([λ, φ]);
          return [(1 - t) * p0[0] + t * p1[0], (1 - t) * -p0[1] + t * -p1[1]];
        })
        .scale(1)
        .translate([width / 2, height / 2])
        .clipExtent(projection0.clipExtent()),
      path = d3.geo.path().projection(projection).context(context);
  return function() {
    return function(u) {
      t = u;
      redraw(path);
    };
  };
}

function update(option) {
  canvas.transition()
      .duration(750)
      .ease( d3.ease("quad") )
      .tween("path", pathTween(projection, projection = option.projection));
  path.projection(projection);
}

function setInitialProjection() {
  var initialIndex = options.findIndex(function(option) {
    return option.name.indexOf("正距円筒図法（Equirectangular") === 0;
  });

  if (initialIndex === -1) initialIndex = 0;

  menu.property("selectedIndex", initialIndex);
  projection = options[initialIndex].projection;
  update(options[initialIndex]);
}

function redraw(path) {
  context.clearRect(0, 0, width, height);
   context.lineWidth = .5 * ratio;

  context.strokeStyle = "#999";
  context.beginPath(), path(graticule), context.stroke();

  context.beginPath(), path({type: "Sphere"}), context.stroke();

  context.lineWidth = 2 * ratio;

  if (face) {
    context.strokeStyle = "#000";
    context.lineWidth = 2;
    context.beginPath(), path(face), context.stroke();
  }
}

d3.json("face.geojson", function(error, data) {
  face = data;
  redraw(path);
});
