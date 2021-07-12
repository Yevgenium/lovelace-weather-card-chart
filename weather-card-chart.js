const locale = {
  da: {
    tempHi: "Temperatur",
    tempLo: "Temperatur nat",
    precip: "Nedbør",
    uPress: "hPa",
    uSpeed: {
      "ms": "m/s",
      "kmh": "km/h"
    },
    uPrecip: "mm",
    cardinalDirections: [
      'N', 'N-NØ', 'NØ', 'Ø-NØ', 'Ø', 'Ø-SØ', 'SØ', 'S-SØ',
      'S', 'S-SV', 'SV', 'V-SV', 'V', 'V-NV', 'NV', 'N-NV', 'N'
    ]
  },
  de: {
    tempHi: "Höchsttemperatur",
    tempLo: "Tiefsttemperatur",
    precip: "Niederschlag",
    uPress: "hPa",
    uSpeed: {
      "ms": "m/s",
      "kmh": "km/h"
    },
    uPrecip: "mm",
    cardinalDirections: [
      'N', 'N-NO', 'NO', 'O-NO', 'O', 'O-SO', 'SO', 'S-SO',
      'S', 'S-SW', 'SW', 'W-SW', 'W', 'W-NW', 'NW', 'N-NW', 'N'
    ]
  },
  en: {
    tempHi: "Temperature",
    tempLo: "Temperature night",
    tempApp: "Feels like",
    precip: "Precipitations",
    uPress: "hPa",
    uPressMmHg: "mmHg",
    uSpeed: {
      "ms": "m/s",
      "kmh": "km/h"
    },
    uPrecip: "mm",
    cardinalDirections: [
      'N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE',
      'S', 'S-SW', 'SW', 'W-SW', 'W', 'W-NW', 'NW', 'N-NW', 'N'
    ]
  },
  es: {
    tempHi: "Temperatura máxima",
    tempLo: "Temperatura mínima",
    precip: "Precipitations",
    uPress: "hPa",
    uSpeed: {
      "ms": "m/s",
      "kmh": "km/h"
    },
    uPrecip: "mm",
    cardinalDirections: [
      'N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE',
      'S', 'S-SO', 'SO', 'O-SO', 'O', 'O-NO', 'NO', 'N-NO', 'N'
    ]
  },
  fr: {
    tempHi: "Température",
    tempLo: "Température nuit",
    precip: "Précipitations",
    uPress: "hPa",
    uSpeed: {
      "ms": "m/s",
      "kmh": "km/h"
    },
    uPrecip: "mm",
    cardinalDirections: [
      'N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE',
      'S', 'S-SO', 'SO', 'O-SO', 'O', 'O-NO', 'NO', 'N-NO', 'N'
    ]
  },
  nl: {
    tempHi: "Maximum temperatuur",
    tempLo: "Minimum temperatuur",
    precip: "Neerslag",
    uPress: "hPa",
    uSpeed: {
      "ms": "m/s",
      "kmh": "km/h"
    },
    uPrecip: "mm",
    cardinalDirections: [
      'N', 'N-NO', 'NO', 'O-NO', 'O', 'O-ZO', 'ZO', 'Z-ZO',
      'Z', 'Z-ZW', 'ZW', 'W-ZW', 'W', 'W-NW', 'NW', 'N-NW', 'N'
    ]
  },
  ru: {
    tempHi: "Температура",
    tempLo: "Температура ночью",
    tempApp: "Ощущается как",
    precip: "Осадки",
    uPress: "гПа",
    uPressMmHg: "мм",
    uSpeed: {
      "ms": "м/с",
      "kmh": "км/ч"
    },
    uPrecip: "мм",
    cardinalDirections: [
      'С', 'С-СВ', 'СВ', 'В-СВ', 'В', 'В-ЮВ', 'ЮВ', 'Ю-ЮВ',
      'Ю', 'Ю-ЮЗ', 'ЮЗ', 'З-ЮЗ', 'З', 'З-СЗ', 'СЗ', 'С-СЗ', 'С'
    ]
  },
  sv: {
    tempHi: "Temperatur",
    tempLo: "Temperatur natt",
    precip: "Nederbörd",
    uPress: "hPa",
    uSpeed: {
      "ms": "m/s",
      "kmh": "km/h"
    },
    uPrecip: "mm",
    cardinalDirections: [
      'N', 'N-NO', 'NO', 'O-NO', 'O', 'O-SO', 'SO', 'S-SO',
      'S', 'S-SV', 'SV', 'V-SV', 'V', 'V-NV', 'NV', 'N-NV', 'N'
    ]
  }
};

class WeatherCardChart extends Polymer.Element {

  static get template() {
    return Polymer.html`
      <style>
        ha-icon {
          color: var(--paper-item-icon-color);
        }
        .card {
          padding: 0 10px 10px 10px;
        }
        .content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .main {
          display: flex;
          align-items: center;
          margin-top: -10px;
        }
        .main ha-icon {
          --iron-icon-height: 74px;
          --iron-icon-width: 74px;
          --mdc-icon-size: 74px;
          margin-right: 10px;
        }
        .main sup {
          font-size: 50%;
        }
        .main ha-icon, .main .temp {
          font-size: 400%;
          font-weight: 300;
        }
        .main .temp {
          cursor: pointer;
        }
        .main .apparent {
          cursor: pointer;
          margin-top: 0.75em;
        }
        .attributes {
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0px 0px 10px 0px;
        }
        .attributes div {
          text-align: left;
        }
        .sun {
          display: flex;
          justify-content: space-evenly;
          margin: 10px 0;
        }
        .sun div {
          flex: 0 0 auto;
        }
        .conditions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0px 3px 0px 16px;
        }
        [hidden] {
          display: none !important;
        }
      </style>
      <ha-card header="[[title]]">
        <div class="card">
          <div class="content">
            <div class="main" hidden="[[chartOnly]]">
              <ha-icon icon="[[getWeatherIcon(weatherObj.state)]]"></ha-icon>
              <div class="temp-content">
              <template is="dom-if" if="[[tempObj]]">
                  <div class="temp" on-click="_tempAttr">[[roundNumber(tempObj.state)]]<sup>[[getUnit('temperature')]]</sup></div>
                  <template is="dom-if" if="[[apparentObj]]"><div class="apparent" on-click="_apparentAttr">[[ll('tempApp')]] [[roundNumber(apparentObj.state)]]<sup>[[getUnit('temperature')]]</sup></div></template>
              </template>
              <template is="dom-if" if="[[!tempObj]]">
                  <div class="temp" on-click="_weatherAttr">[[roundNumber(weatherObj.attributes.temperature)]]<sup>[[getUnit('temperature')]]</sup></div>
                  <template is="dom-if" if="[[apparentObj]]"><div class="apparent" on-click="_apparentAttr">[[ll('tempApp')]] [[roundNumber(apparentObj.state)]]<sup>[[getUnit('temperature')]]</sup></div></template>
              </template>
              </div>
            </div>
            <div class="attributes" on-click="_weatherAttr" hidden="[[chartOnly]]">
              <div>
                <ha-icon icon="hass:water-percent"></ha-icon> [[roundNumber(weatherObj.attributes.humidity)]] %<br>
                <ha-icon icon="hass:gauge"></ha-icon> [[computePressure(weatherObj.attributes.pressure)]] [[ll('uPress')]]<br>
                <ha-icon icon="[[getWindDirIcon(windBearing)]]"></ha-icon>
                <template is="dom-if" if="[[windObj]]">
                  [[roundNumber(windObj.state)]]       
                </template>
                <template is="dom-if" if="[[!windObj]]">
                  [[computeWind(weatherObj.attributes.wind_speed)]]
                </template>
                [[getWindUnit()]]
              </div>
            </div>
          </div>
          <template is="dom-if" if="[[sunObj]]">
            <div class="sun" hidden="[[chartOnly]]">
              <div>
                <ha-icon icon="mdi:weather-sunset-up"></ha-icon> [[computeTime(sunObj.attributes.next_rising)]]
              </div>
              <div>
                <ha-icon icon="mdi:weather-sunset-down"></ha-icon> [[computeTime(sunObj.attributes.next_setting)]]
              </div>
            </div>
          </template>
          <ha-chart-base hass="[[_hass]]" data="[[ChartData]]"></ha-chart-base>
          <div class="conditions">
            <template is="dom-repeat" items="[[forecast]]">
              <div>
                <ha-icon icon="[[getWeatherIcon(item.condition)]]"></ha-icon>
              </div>
            </template>
          </div>
        </div>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      config: Object,
      sunObj: Object,
      tempObj: Object,
      windObj: Object,
      mode: String,
      wind_unit: String,
      chartOnly: Boolean,
      weatherObj: {
        type: Object,
        observer: 'dataChanged',
      },
    };
  }

  constructor() {
    super();
    this.mode = 'daily';
    this.windUnit = 'ms';
    this.weatherIcons = {
      'clear-night': 'hass:weather-night',
      'cloudy': 'hass:weather-cloudy',
      'fog': 'hass:weather-fog',
      'hail': 'hass:weather-hail',
      'lightning': 'hass:weather-lightning',
      'lightning-rainy': 'hass:weather-lightning-rainy',
      'partlycloudy': 'hass:weather-partly-cloudy',
      'pouring': 'hass:weather-pouring',
      'rainy': 'hass:weather-rainy',
      'snowy': 'hass:weather-snowy',
      'snowy-rainy': 'hass:weather-snowy-rainy',
      'sunny': 'hass:weather-sunny',
      'windy': 'hass:weather-windy',
      'windy-variant': 'hass:weather-windy-variant'
    };
    this.cardinalDirectionsIcon = [
      'mdi:arrow-down', 'mdi:arrow-bottom-left', 'mdi:arrow-left',
      'mdi:arrow-top-left', 'mdi:arrow-up', 'mdi:arrow-top-right',
      'mdi:arrow-right', 'mdi:arrow-bottom-right', 'mdi:arrow-down'
    ];
  }

  setConfig(config) {
    this.config = config;
    this.title = config.title || "";
    this.weatherObj = config.weather || config.entity;
    this.tempObj = config.temp;
    this.apparentObj = config.temp_apparent;
    this.windObj = config.wind;
    this.mode = config.mode;
    this.windUnit = config.wind_unit || 'ms';
    this.pressure2mmhg = config.pressure2mmhg || false;
    this.chartOnly = config.chart_only;
    if (!this.weatherObj) {
      throw new Error('Please define "weather" entity in the card config');
    }
  }

  set hass(hass) {
    this._hass = hass;
    this.lang = this._hass.selectedLanguage || this._hass.language;
    this.weatherObj = this.config.weather in hass.states ? hass.states[this.config.weather] :
        this.config.entity in hass.states ? hass.states[this.config.entity] : null;
    this.sunObj = 'sun.sun' in hass.states ? hass.states['sun.sun'] : null;
    this.tempObj = this.config.temp in hass.states ? hass.states[this.config.temp] : null;
    this.apparentObj = this.config.temp_apparent in hass.states ? hass.states[this.config.temp_apparent] : null;
    this.windObj = this.config.wind in hass.states ? hass.states[this.config.wind] : null;
    this.forecast = this.weatherObj.attributes.forecast.slice(0,9);
    this.windBearing = this.weatherObj.attributes.wind_bearing;
  }

  dataChanged() {
    this.drawChart();
  }

  roundNumber(number) {
    var rounded = Math.round(number);
    return rounded;
  }

  ll(str) {
    if (str === "uPress" && this.pressure2mmhg) {
      str = "uPressMmHg";
    }
    if (locale[this.lang] === undefined || locale[this.lang][str] === undefined)
      return locale.en[str];
    return locale[this.lang][str];
  }

  computeTime(time) {
    const date = new Date(time);
    return date.toLocaleTimeString(this.lang,
      { hour:'2-digit', minute:'2-digit' }
    );
  }

  computePressure(pressure) {
    var calcPressure = this.pressure2mmhg ? Math.round(pressure * 1000 / 1333)
        : Math.round(pressure);
    return calcPressure;
  }

  computeWind(speed) {
    if (this.windUnit === 'ms')
      return Math.round(speed * 1000 / 3600);
    else
      return speed;
  }

  getCardSize() {
    return 4;
  }

  getUnit(unit) {
    return this._hass.config.unit_system[unit] || '';
  }

  getWindUnit()
  {
    return this.ll('uSpeed')[this.windUnit];
  }

  getWeatherIcon(condition) {
    return this.weatherIcons[condition];
  }

  getWindDirIcon(degree) {
    if (degree == 'unknown')
      return 'mdi:circle-small';
    return this.cardinalDirectionsIcon[parseInt((degree + 22.5) / 45.0)];
  }

  getWindDir(deg) {
    if (locale[this.lang] === undefined)
      return locale.en.cardinalDirections[parseInt((deg + 11.25) / 22.5)];
    return locale[this.lang]['cardinalDirections'][parseInt((deg + 11.25) / 22.5)];
  }

  drawChart() {
    if (!this.weatherObj.attributes || !this.weatherObj.attributes.forecast) {
      return [];
    }
    var data = this.weatherObj.attributes.forecast.slice(0,9);
    var locale = this._hass.selectedLanguage || this._hass.language;
    var tempUnit = this._hass.config.unit_system.temperature;
    var lengthUnit = this._hass.config.unit_system.length;
    var precipUnit = lengthUnit === 'km' ? this.ll('uPrecip') : 'in';
    var mode = this.mode;
    var i;
    var dateTime = [];
    var tempHigh = [];
    var tempLow = [];
    var precip = [];
    for (i = 0; i < data.length; i++) {
      var d = data[i];
      dateTime.push(new Date(d.datetime));
      tempHigh.push(d.temperature);
      tempLow.push(d.templow);
      precip.push(d.precipitation);
    }
    var style = getComputedStyle(document.body);
    var textColor = style.getPropertyValue('--primary-text-color');
    var dividerColor = style.getPropertyValue('--divider-color');
    const chartOptions = {
      type: 'bar',
      data: {
        labels: dateTime,
        datasets: [
          {
            label: this.ll('tempHi'),
            type: 'line',
            data: tempHigh,
            yAxisID: 'TempAxis',
            borderWidth: 2.0,
            lineTension: 0.4,
            pointRadius: 0.0,
            pointHitRadius: 5.0,
            fill: false,
          },
          {
            label: this.ll('tempLo'),
            type: 'line',
            data: tempLow,
            yAxisID: 'TempAxis',
            borderWidth: 2.0,
            lineTension: 0.4,
            pointRadius: 0.0,
            pointHitRadius: 5.0,
            fill: false,
          },
          {
            label: this.ll('precip'),
            type: 'bar',
            data: precip,
            yAxisID: 'PrecipAxis',
          },
        ]
      },
      options: {
        animation: {
          duration: 300,
          easing: 'linear',
          onComplete: function () {
            var chartInstance = this.chart,
              ctx = chartInstance.ctx;
            ctx.fillStyle = textColor;
            var fontSize = 10;
            var fontStyle = 'normal';
            var fontFamily = 'Roboto';
            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            var meta = chartInstance.controller.getDatasetMeta(2);
            meta.data.forEach(function (bar, index) {
              var data = (Math.round((chartInstance.data.datasets[2].data[index]) * 10) / 10).toFixed(1);
              ctx.fillText(data, bar._model.x, bar._model.y - 5);
            });
          },
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            type: 'time',
            maxBarThickness: 15,
            display: false,
            ticks: {
              display: false,
            },
            gridLines: {
              display: false,
            },
          },
          {
            id: 'DateAxis',
            position: 'top',
            gridLines: {
              display: true,
              drawBorder: false,
              color: dividerColor,
            },
            ticks: {
              display: true,
              source: 'labels',
              autoSkip: true,
              fontColor: textColor,
              maxRotation: 0,
              callback: function(value, index, values) {
                var data = new Date(value).toLocaleDateString(locale,
                  { weekday: 'short' });
                var time = new Date(value).toLocaleTimeString(locale,
                  { hour: 'numeric' });
                if (mode == 'hourly') {
                  return time;
                }
                return data;
              },
            },
          }],
          yAxes: [{
            id: 'TempAxis',
            position: 'left',
            gridLines: {
              display: true,
              drawBorder: false,
              color: dividerColor,
              borderDash: [1,3],
            },
            ticks: {
              display: true,
              fontColor: textColor,
            },
            afterFit: function(scaleInstance) {
              scaleInstance.width = 28;
            },
          },
          {
            id: 'PrecipAxis',
            position: 'right',
            gridLines: {
              display: false,
              drawBorder: false,
              color: dividerColor,
            },
            ticks: {
              display: false,
              min: 0,
              suggestedMax: 20,
              fontColor: textColor,
            },
            afterFit: function(scaleInstance) {
              scaleInstance.width = 15;
            },
          }],
        },
        tooltips: {
          mode: 'index',
          callbacks: {
            title: function (items, data) {
              const item = items[0];
              const date = data.labels[item.index];
              return new Date(date).toLocaleDateString(locale, {
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                hour: 'numeric',
                minute: 'numeric',
              });
            },
            label: function(tooltipItems, data) {
              var label = data.datasets[tooltipItems.datasetIndex].label || '';
              if (data.datasets[2].label == label) {
                return label + ': ' + (tooltipItems.yLabel ?
                  (tooltipItems.yLabel + ' ' + precipUnit) : ('0 ' + precipUnit));
              }
              return label + ': ' + tooltipItems.yLabel + ' ' + tempUnit;
            },
          },
        },
      },
    };
    this.ChartData = chartOptions;
  }

  _fire(type, detail, options) {
    const node = this.shadowRoot;
    options = options || {};
    detail = (detail === null || detail === undefined) ? {} : detail;
    const e = new Event(type, {
      bubbles: options.bubbles === undefined ? true : options.bubbles,
      cancelable: Boolean(options.cancelable),
      composed: options.composed === undefined ? true : options.composed
    });
    e.detail = detail;
    node.dispatchEvent(e);
    return e;
  }

  _tempAttr() {
    this._fire('hass-more-info', { entityId: this.config.temp });
  }

  _apparentAttr() {
    this._fire('hass-more-info', { entityId: this.config.temp_apparent });
  }

  _weatherAttr() {
    this._fire('hass-more-info', { entityId: this.config.weather || this.config.entity });
  }
}

customElements.define('weather-card-chart', WeatherCardChart);
