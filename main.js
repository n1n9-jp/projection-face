var ratio = window.devicePixelRatio || 1,
    width = 960 * ratio,
    height = 450 * ratio;

var options = [
  {name: "アイトフ図法（Aitoff）", projection: d3.geo.aitoff()},
  {name: "アルバー図法（Albers）", projection: d3.geo.albers().scale(145).parallels([20, 50])},
  {name: "オーガスト図法（August）", projection: d3.geo.august().scale(60)},
  {name: "ベイカー図法（Baker）", projection: d3.geo.baker().scale(100)},
  {name: "ベルクハウス図法（Berghaus）", projection: d3.geo.berghaus().scale(100)},
  {name: "ボッグス図法（Boggs）", projection: d3.geo.boggs()},
  {name: "ボンヌ図法（Bonne）", projection: d3.geo.bonne().scale(100)},
  {name: "ブロムリー図法（Bromley）", projection: d3.geo.bromley()},
  {name: "コリニョン図法（Collignon）", projection: d3.geo.collignon().scale(93)},
  {name: "クラスター放物線図法（Craster Parabolic）", projection: d3.geo.craster()},
  {name: "エッカートI図法（Eckert I）", projection: d3.geo.eckert1().scale(165)},
  {name: "エッカートII図法（Eckert II）", projection: d3.geo.eckert2().scale(165)},
  {name: "エッカートIII図法（Eckert III）", projection: d3.geo.eckert3().scale(180)},
  {name: "エッカートIV図法（Eckert IV）", projection: d3.geo.eckert4().scale(180)},
  {name: "エッカートV図法（Eckert V）", projection: d3.geo.eckert5().scale(170)},
  {name: "エッカートVI図法（Eckert VI）", projection: d3.geo.eckert6().scale(170)},
  {name: "アイゼンロール図法（Eisenlohr）", projection: d3.geo.eisenlohr().scale(60)},
  {name: "正距円筒図法（Equirectangular / Plate Carrée）", projection: d3.geo.equirectangular()},
  {name: "ファヘイ図法（Fahey）", projection: d3.geo.fahey().scale(120)},
  {name: "ガル正射図法（Gall Stereographic）", projection: d3.geo.cylindricalStereographic().parallel(45).scale(140)},
  {name: "グード・ホモロサイン図法（Goode Homolosine）", projection: d3.geo.homolosine()},
  {name: "ギンズバーグIV図法（Ginzburg IV）", projection: d3.geo.ginzburg4().scale(120)},
  {name: "ギンズバーグV図法（Ginzburg V）", projection: d3.geo.ginzburg5().scale(120)},
  {name: "ギンズバーグVI図法（Ginzburg VI）", projection: d3.geo.ginzburg6().scale(120)},
  {name: "ギンズバーグVIII図法（Ginzburg VIII）", projection: d3.geo.ginzburg8().scale(120)},
  {name: "ギンズバーグIX図法（Ginzburg IX）", projection: d3.geo.ginzburg9().scale(120)},
  {name: "グリングオーテン図法（Gringorten）", projection: d3.geo.gringorten().scale(220)},
  {name: "ギュイヨー図法（Guyou）", projection: d3.geo.guyou().scale(150)},
  {name: "ハンマー図法（Hammer）", projection: d3.geo.hammer().scale(165)},
  {name: "ハンマー逆方位図法（Hammer Retroazimuthal）", projection: d3.geo.hammerRetroazimuthal().scale(90)},
  {name: "HEALPix図法（HEALPix）", projection: d3.geo.healpix()},
  {name: "ヒル図法（Hill）", projection: d3.geo.hill().scale(120)},
  {name: "カヴライスキーVII図法（Kavrayskiy VII）", projection: d3.geo.kavrayskiy7()},
  {name: "ラグランジュ図法（Lagrange）", projection: d3.geo.lagrange().scale(120)},
  {name: "ランベルト正積円筒図法（Lambert cylindrical equal-area）", projection: d3.geo.cylindricalEqualArea()},
  {name: "ラリヴェ図法（Larrivée）", projection: d3.geo.larrivee().scale(95)},
  {name: "ラスコウスキ図法（Laskowski）", projection: d3.geo.laskowski().scale(120)},
  {name: "ロキシムーサル図法（Loximuthal）", projection: d3.geo.loximuthal()},
  {name: "メルカトル図法（Mercator）", projection: d3.geo.mercator().scale(100)},
  {name: "ミラー図法（Miller）", projection: d3.geo.miller().scale(100)},
  {name: "マクブライド＝トーマス平極放物線図法（McBryde–Thomas Flat-Polar Parabolic）", projection: d3.geo.mtFlatPolarParabolic()},
  {name: "マクブライド＝トーマス平極四次図法（McBryde–Thomas Flat-Polar Quartic）", projection: d3.geo.mtFlatPolarQuartic()},
  {name: "マクブライド＝トーマス平極正弦図法（McBryde–Thomas Flat-Polar Sinusoidal）", projection: d3.geo.mtFlatPolarSinusoidal()},
  {name: "モルワイデ図法（Mollweide）", projection: d3.geo.mollweide().scale(165)},
  {name: "ナチュラルアース図法（Natural Earth）", projection: d3.geo.naturalEarth()},
  {name: "ネル＝ハンマー図法（Nell–Hammer）", projection: d3.geo.nellHammer()},
  {name: "正射図法（Orthographic）", projection: d3.geo.orthographic().scale(200)},
  {name: "多円錐図法（Polyconic）", projection: d3.geo.polyconic().scale(100)},
  {name: "矩形多円錐図法（Rectangular Polyconic）", projection: d3.geo.rectangularPolyconic().scale(120)},
  {name: "ロビンソン図法（Robinson）", projection: d3.geo.robinson()},
  {name: "サインソイダル図法（Sinusoidal）", projection: d3.geo.sinusoidal()},
  {name: "サイン・モルワイデ図法（Sinu-Mollweide）", projection: d3.geo.sinuMollweide()},
  {name: "ステレオグラフィック図法（Stereographic）", projection: d3.geo.stereographic()},
  {name: "タイムズ図法（Times）", projection: d3.geo.times().scale(140)},
  {name: "ファン・デル・グリンテン図法（Van der Grinten）", projection: d3.geo.vanDerGrinten().scale(75)},
  {name: "ファン・デル・グリンテンII図法（Van der Grinten II）", projection: d3.geo.vanDerGrinten2().scale(75)},
  {name: "ファン・デル・グリンテンIII図法（Van der Grinten III）", projection: d3.geo.vanDerGrinten3().scale(75)},
  {name: "ファン・デル・グリンテンIV図法（Van der Grinten IV）", projection: d3.geo.vanDerGrinten4().scale(120)},
  {name: "ヴァーグナーIV図法（Wagner IV）", projection: d3.geo.wagner4()},
  {name: "ヴァーグナーVI図法（Wagner VI）", projection: d3.geo.wagner6()},
  {name: "ヴァーグナーVII図法（Wagner VII）", projection: d3.geo.wagner7()},
  {name: "ウォーターマン図法（Waterman）", projection: d3.geo.polyhedron.waterman().scale(70)},
  {name: "ヴィンケル・トリプレ図法（Winkel Tripel）", projection: d3.geo.winkel3()}
];

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
