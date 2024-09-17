/** * version: v3 */
'use strict';
var global = function () {
  var _0x55a93e = function () {
    if (document['getElementById']('theme_copyright')) {
      $('#theme_copyright')['html']('<a href="/staff" target="_blank" class="nav-link pr-3 pl-0">SSPANEL</a><a href="https://t.me/metrontheme_bot" target="_blank" class="nav-link px-3">Metron</a>');
    } else {
      Swal['fire']({
        'icon': 'error',
        'title': '请勿去除版权信息',
        'showConfirmButton': false
      });
    }
  };
  var _0x9641b7 = function (_0x11d62a) {
    switch (_0x11d62a.ret) {
      case 0x0:
      case '0':
      case -0x1:
      case '-1':
        swal['fire']({
          'title': _0x11d62a['msg'],
          'icon': 'error',
          'confirmButtonText': '确定',
          'confirmButtonClass': 'btn btn-primary'
        })['then'](function () {
          window['location']['reload']();
        });
        throw new Error(_0x11d62a['msg']);
      case 0x1:
      case '1':
        MRCookie['setCookie']('mtauth', mthash, 0x5a0);
        window['location']['reload']();
        break;
      default:
        break;
    }
  };
  var _0x285523 = function () {
    $['ajax']({
      'async': false,
      'url': '/user/authcode',
      'dataType': 'json',
      'type': 'POST',
      'data': {},
      'success': function (_0x196526) {
        _0x9641b7(_0x196526);
      },
      'error': function () {
        throw new Error('请尝试刷新页面重试');
      }
    });
  };
  return {
    'ver': function () {
      _0x285523();
    },
    'copyright': function () {
      _0x55a93e();
    }
  };
}();
jQuery(document)['ready'](function () {
  global['copyright']();
});
if (MRCookie['getCookie']('mtauth') == null || MRCookie['getCookie']('mtauth') == '') {
  global['ver']();
  throw new Error('Authorization failed: ' + window['location']['host']);
} else if (mthash != mtauth) {
  global['ver']();
  throw new Error('Authorization failed: ' + window['location']['host']);
}
var mt = function () {
  var _0x38b0cd = function () {
    return md5(mtauth + 'metronkey');
  };
  var _0x41b96c = function (_0x5b9ae5) {
    $['ajax']({
      'async': false,
      'url': '/user/changetheme',
      'dataType': 'json',
      'type': 'POST',
      'data': {
        'type': _0x5b9ae5
      },
      'success': function (_0x592a6e) {
        mt['mswal']('success', _0x592a6e['msg'], 're');
      },
      'error': function () {
        mt['mswal']('error', '出现错误了~~');
      }
    });
  };
  var _0x30ce7b = function (_0x3afc52) {
    if (_0x3afc52 == 'modal') {
      $['fn']['modal']['Constructor']['prototype']['_enforceFocus'] = function () {
        new ClipboardJS('.copy-modal');
      };
      $('.copy-modal')['click'](function () {
        Swal['fire']({
          'icon': 'success',
          'title': '已复制到剪切板',
          'timer': 0x5dc,
          'allowOutsideClick': true,
          'showConfirmButton': false
        });
      });
    }
    new ClipboardJS('.copy-text');
    $('.copy-text')['click'](function () {
      Swal['fire']({
        'icon': 'success',
        'title': '已复制到剪切板',
        'timer': 0x5dc,
        'allowOutsideClick': true,
        'showConfirmButton': false
      });
    });
  };
  var _0x2631a2 = function (_0x102fe0, _0x33e2f1) {
    swal['fire']({
      'title': _0x102fe0,
      'icon': _0x33e2f1,
      'confirmButtonText': '确定'
    });
  };
  var _0xc1526c = function (_0x2ea743, _0x3a24a3) {
    if (_0x2ea743.ret === 0x1) {
      swal['fire']({
        'title': _0x2ea743['msg'],
        'icon': 'success',
        'confirmButtonText': '确定',
        'confirmButtonClass': 'btn btn-primary'
      })['then'](function () {
        if (_0x3a24a3) {
          window['location']['href'] = _0x3a24a3;
        } else {
          window['location']['reload']();
        }
      });
    } else if (_0x2ea743.ret === 0x0) {
      Swal['fire']({
        'icon': 'error',
        'html': _0x2ea743['msg'],
        'confirmButtonText': '确定',
        'confirmButtonClass': 'btn btn-primary'
      });
    } else {
      window['location']['reload']();
    }
  };
  return {
    'key': function () {
      return _0x38b0cd();
    },
    'changeTheme': function (_0x19e560) {
      var _0x14a4d5 = new KTDialog({
        'type': 'loader',
        'placement': 'top center',
        'message': '正在切换主题...'
      });
      _0x14a4d5['show']();
      _0x41b96c(_0x19e560);
    },
    'copytext': function (_0x59a9cb) {
      _0x30ce7b(_0x59a9cb);
    },
    'swal': function (_0x4db212, _0x2e371a) {
      _0x2631a2(_0x4db212, _0x2e371a);
    },
    'ajax_swal': function (_0x322618, _0x52467e) {
      _0xc1526c(_0x322618, _0x52467e);
    },
    'mswal': function (_0x3aadb4, _0x2108c4, _0x4b15b3, _0x2549f6) {
      if (!_0x4b15b3) {
        Swal['fire']({
          'toast': true,
          'position': 'top-end',
          'showConfirmButton': false,
          'timer': !_0x2549f6 ? 0xbb8 : _0x2549f6 == '' ? 0xbb8 : _0x2549f6,
          'icon': !_0x3aadb4 ? 'success' : _0x3aadb4 == '' ? 'success' : _0x3aadb4,
          'title': !_0x2108c4 ? '操作成功' : _0x2108c4 == '' ? '操作成功' : _0x2108c4
        });
      }
      if (_0x4b15b3 == 're') {
        Swal['fire']({
          'toast': true,
          'position': 'top-end',
          'showConfirmButton': false,
          'timer': 0x5dc,
          'icon': _0x3aadb4,
          'title': _0x2108c4,
          'onClose': () => {
            window['location']['reload']();
          }
        });
      }
    },
    'pop': function (_0x287dc3) {
      if (MRCookie['getCookie']('pop') == '' || MRCookie['getCookie']('pop') == null) {
        setTimeout(function () {
          $('#index-pop-modal')['modal']('show');
          MRCookie['setCookie']('pop', 'yes', _0x287dc3);
        }, 0x9c4);
      }
    },
    'autopasswd': function (_0x4e9846, _0x29ddf6, _0x1b8771) {
      var _0x3e255d = '',
        _0x4f0c8e = _0x29ddf6,
        _0x3d77c7 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      if (_0x4e9846) {
        _0x4f0c8e = Math['round'](Math['random']() * (_0x1b8771 - _0x29ddf6)) + _0x29ddf6;
      }
      var _0x12760f;
      for (var _0x6480d2 = 0x0; _0x6480d2 < _0x4f0c8e; _0x6480d2++) {
        _0x12760f = Math['round'](Math['random']() * (_0x3d77c7['length'] - 0x1));
        _0x3e255d += _0x3d77c7[_0x12760f];
      }
      return _0x3e255d;
    },
    'href': function (_0x3ac004, _0x2ff625) {
      if (_0x2ff625) {
        window['open'](_0x3ac004);
      } else {
        window['location']['href'] = _0x3ac004;
      }
    },
    'getTimeForm'(_0x40ee10) {
      var _0xf601f6 = new Date(_0x40ee10 * 0x3e8);
      var _0x1b1f12 = _0xf601f6['getFullYear']() + '-';
      var _0x22fa0c = (_0xf601f6['getMonth']() + 0x1 < 0xa ? '0' + (_0xf601f6['getMonth']() + 0x1) : _0xf601f6['getMonth']() + 0x1) + '-';
      var _0x43b2a9 = (_0xf601f6['getDate']() < 0xa ? '0' + _0xf601f6['getDate']() : _0xf601f6['getDate']()) + ' ';
      var _0x1bc9b4 = (_0xf601f6['getHours']() < 0xa ? '0' + _0xf601f6['getHours']() : _0xf601f6['getHours']()) + ':';
      var _0x47b6a4 = (_0xf601f6['getMinutes']() < 0xa ? '0' + _0xf601f6['getMinutes']() : _0xf601f6['getMinutes']()) + ':';
      var _0x41dcba = _0xf601f6['getSeconds']() < 0xa ? '0' + _0xf601f6['getSeconds']() : _0xf601f6['getSeconds']();
      return _0x1b1f12 + _0x22fa0c + _0x43b2a9 + _0x1bc9b4 + _0x47b6a4 + _0x41dcba;
    }
  };
}();
var urlPath = window['location']['pathname'];
if (urlPath['indexOf']('/user') > -0x1 && urlPath['indexOf']('/user/') < 0x0 || urlPath['indexOf']('/tutorial') > -0x1) {
  var index = function () {
    var _0x1da73a = function (_0x5b6ab0) {
      var _0x2013df = document['getElementById']('flowTiaoChart');
      var _0x3f2fc0 = parseInt(KTUtil['css'](_0x2013df, 'height'));
      if (!_0x2013df) {
        return;
      }
      var _0x516107 = {
        'series': [_0x5b6ab0],
        'chart': {
          'height': _0x3f2fc0 + 0x64,
          'type': 'radialBar',
          'offsetY': 0x0
        },
        'plotOptions': {
          'radialBar': {
            'startAngle': -0x5a,
            'endAngle': 0x5a,
            'hollow': {
              'margin': 0x0,
              'size': '70%'
            },
            'dataLabels': {
              'showOn': 'always',
              'name': {
                'show': true,
                'fontSize': '15px',
                'fontWeight': '700',
                'offsetY': 0x5,
                'color': ThemeStyle['global']['gray']['500']
              },
              'value': {
                'show': true,
                'color': ThemeStyle['index']['flowTiaoChart']['text'],
                'fontSize': '45px',
                'fontWeight': '700',
                'offsetY': -0x23
              }
            },
            'track': {
              'background': ThemeStyle['index']['flowTiaoChart']['light'],
              'strokeWidth': '100%'
            }
          }
        },
        'colors': [ThemeStyle['index']['flowTiaoChart']['strip']],
        'stroke': {
          'lineCap': 'round'
        },
        'labels': ['剩余流量']
      };
      var _0x1d1327 = new ApexCharts(_0x2013df, _0x516107);
      _0x1d1327['render']();
    };
    var _0x4e60f3 = function (_0x3ccb27, _0x356e37) {
      if (_0x3ccb27 == 'ssr') {
        var _0x5611f2 = window['btoa'](_0x356e37);
        Swal['fire']({
          'title': '提示',
          'html': '<code>SSR</code>一键导入仅支持<code>Windows</code>端<code>SSR 5.1</code>以上版本',
          'icon': 'info',
          'showCancelButton': true,
          'confirmButtonText': '继续导入',
          'cancelButtonText': '取消'
        })['then'](_0x4af136 => {
          if (_0x4af136['value']) {
            window['location']['href'] = 'sub://' + _0x5611f2;
          }
        });
      }
      if (_0x3ccb27 == 'clash') {
        Swal['fire']({
          'title': '提示',
          'html': '<code>Clash</code>一键导入仅支持<code>Windows</code>、<code>Mac OS</code>和<code>Android</code>',
          'icon': 'info',
          'showCancelButton': true,
          'confirmButtonText': '继续导入',
          'cancelButtonText': '取消'
        })['then'](_0x5407ef => {
          if (_0x5407ef['value']) {
            window['location']['href'] = 'clash://install-config?url=' + _0x356e37;
          }
        });
      }
      if (_0x3ccb27 == 'clashr') {
        Swal['fire']({
          'title': '提示',
          'html': '<code>ClashR</code>一键导入仅支持<code>Windows</code>、<code>Mac OS</code>和<code>Android</code>',
          'icon': 'info',
          'showCancelButton': true,
          'confirmButtonText': '继续导入',
          'cancelButtonText': '取消'
        })['then'](_0x385835 => {
          if (_0x385835['value']) {
            window['location']['href'] = 'clash://install-config?url=' + _0x356e37;
          }
        });
      }
      if (_0x3ccb27 == 'shadowrocket') {
        var _0x5611f2 = window['btoa'](_0x356e37);
        Swal['fire']({
          'title': '提示',
          'html': '<code>Shadowrocket</code>一键导入仅支持<code>Apple iOS</code>端设备',
          'icon': 'info',
          'showCancelButton': true,
          'confirmButtonText': '继续导入',
          'cancelButtonText': '取消'
        })['then'](_0x1f43b9 => {
          if (_0x1f43b9['value']) {
            window['location']['href'] = 'sub://' + _0x5611f2;
          }
        });
      }
      if (_0x3ccb27 == 'quantumult') {
        var _0x5611f2 = window['btoa'](_0x356e37);
        var _0x35e57e = _0x5611f2['replace'](/=/g, '');
        Swal['fire']({
          'title': '提示',
          'html': '<code>Quantumult</code>一键导入仅支持<code>Apple iOS</code>端设备',
          'icon': 'warning',
          'showCancelButton': true,
          'confirmButtonText': '继续导入',
          'cancelButtonText': '取消'
        })['then'](_0x2eddd2 => {
          if (_0x2eddd2['value']) {
            window['location']['href'] = 'quantumult://configuration?server=' + _0x35e57e;
          }
        });
      }
      if (_0x3ccb27 == 'quantumult_v2') {
        var _0x5611f2 = window['btoa'](_0x356e37);
        var _0x35e57e = _0x5611f2['replace'](/=/g, '');
        Swal['fire']({
          'title': '提示',
          'html': '<code>Quantumult</code>一键导入仅支持<code>Apple iOS</code>端设备',
          'icon': 'warning',
          'showCancelButton': true,
          'confirmButtonText': '继续导入',
          'cancelButtonText': '取消'
        })['then'](_0x271edf => {
          if (_0x271edf['value']) {
            window['location']['href'] = 'quantumult://configuration?server=' + _0x35e57e;
          }
        });
      }
    };
    var _0x178e0d = function (_0x2fd228, _0x5c6f7e) {
      var _0x50f793 = window['btoa'](_0x5c6f7e);
      switch (_0x2fd228) {
        case 'shadowrocket':
          $('#qrcode-sublink-content')['html']('<div class="text-center"><p>使用 ' + _0x2fd228 + ' 客户端扫码</p><div align="center" id="qrcode" style="padding-top:10px;"></div></div>');
          $('#qrcode')['qrcode']({
            'text': 'sub://' + _0x50f793
          });
          $('#qrcode-sublink-modal')['modal']();
          break;
      }
    };
    var _0x47d7a1 = function () {
      $('#checkin')['text']('请稍候...')['attr']('disabled', true);
      $['ajax']({
        'type': 'POST',
        'url': '/user/checkin',
        'dataType': 'json',
        'success': function (_0x146cc1) {
          if (_0x146cc1.ret === 0x1) {
            setTimeout(function () {
              mt['mswal']('success', _0x146cc1['msg']);
              $('#checkin')['text']('已签到')['removeClass']('btn btn-white font-weight-bold py-3 px-6')['addClass']('btn btn-transparent-white font-weight-bold py-3 px-6 mr-2 disabled');
            }, 0x3e8);
          } else if (_0x146cc1.ret === 0x0) {
            mt['mswal']('error', _0x146cc1['msg']);
            $('#checkin')['text']('每日签到')['attr']('disabled', false);
          } else {
            window['location']['reload']();
          }
        },
        'error': function (_0x3fb994) {
          setTimeout(function () {
            mt['mswal']('error', _0x3fb994['status']);
            $('#checkin')['text']('每日签到')['attr']('disabled', false);
          }, 0x3e8);
        }
      });
    };
    var _0x37c0cc = function (_0x38cc57 = 'get') {
      if (_0x38cc57 == 'get') {
        $('#advance_reset_flow_onclick')['text']('请稍候...');
        $['ajax']({
          'type': 'POST',
          'url': '/user/advance_feset_flow',
          'dataType': 'json',
          'data': {
            'mode': _0x38cc57
          },
          'success': function (_0x44d27e) {
            $('#advance_reset_flow_onclick')['text']('提前重置');
            if (_0x44d27e.ret === 0x1) {
              $('#ResetFlow_day')['html']('距离下次重置时还有：<code>' + _0x44d27e['info']['sub_time_day'] + '天</code> ');
              $('#ResetFlow_sub_time_day')['html']('扣除时长：' + _0x44d27e['info']['sub_time_day'] + '天');
              $('#ResetFlow_add_flow_gib')['html']('添加流量：' + _0x44d27e['info']['add_flow_gib'] + 'GB');
              $('#advanceResetFlow-modal')['modal']();
              swal['close']();
            } else {
              Swal['fire']({
                'icon': 'error',
                'title': _0x44d27e['msg'],
                'timer': 0x9c4,
                'showConfirmButton': false
              });
            }
          },
          'error': function (_0xb60db5) {
            $('#advance_reset_flow_onclick')['text']('提前重置');
            Swal['fire']({
              'icon': 'error',
              'title': '发生错误：' + _0xb60db5['status']
            });
          }
        });
      } else if (_0x38cc57 == 'set') {
        Swal['fire']({
          'icon': 'warning',
          'title': '是否重置流量?',
          'html': '将会扣除相应的会员时长, 提前获取流量',
          'showCancelButton': true,
          'confirmButtonText': '确定',
          'cancelButtonText': '取消'
        })['then'](_0x425463 => {
          if (_0x425463['value']) {
            swal['fire']({
              'title': '正在处理中',
              'text': '请耐心等候...',
              'onOpen': function () {
                swal['showLoading']();
              }
            });
            $['ajax']({
              'type': 'POST',
              'url': '/user/advance_feset_flow',
              'dataType': 'json',
              'data': {
                'mode': _0x38cc57
              },
              'success': function (_0x14d786) {
                if (_0x14d786.ret === 0x1) {
                  Swal['fire']({
                    'icon': 'success',
                    'title': '提前重置成功',
                    'html': _0x14d786['msg'],
                    'onClose': () => {
                      window['location']['reload']();
                    }
                  });
                } else {
                  Swal['fire']({
                    'icon': 'error',
                    'title': _0x14d786['msg'],
                    'timer': 0x9c4,
                    'showConfirmButton': false
                  });
                }
              },
              'error': function (_0x1d5b53) {
                Swal['fire']({
                  'icon': 'error',
                  'title': '发生错误：' + _0x1d5b53['status']
                });
              }
            });
          }
        });
      }
    };
    var _0x191b30 = function () {
      if (!document['getElementById']('index-NodeTrafficChart-card')) {
        return;
      }
      KTApp['block']('#index-NodeTrafficChart-card', {
        'overlayColor': '#FFFFFF',
        'state': 'primary',
        'message': '加载中...'
      });
      $['ajax']({
        'type': 'GET',
        'url': '/user/ajax_data/chart/index_node_traffic',
        'dataType': 'json',
        'data': {},
        'success': function (_0x40cb60) {
          if (_0x40cb60.ret === 0x1) {
            _0x1c2d4f(_0x40cb60);
          } else if (_0x40cb60.ret === 0x0) {
            $('#NodeTrafficChart_null')['show']();
          } else {
            window['location']['reload']();
          }
          KTApp['unblock']('#index-NodeTrafficChart-card');
        },
        'error': function (_0x3a73b8) {
          Swal['fire']({
            'icon': 'error',
            'title': '发生错误：' + _0x3a73b8['status']
          });
        }
      });
    };
    var _0x1c2d4f = function (_0x56794c) {
      var _0x574c90 = document['getElementById']('NodeTrafficChart');
      if (!_0x574c90) {
        return;
      }
      let _0x2a9e99 = [],
        _0x46f478 = [],
        _0x128e2b = [];
      for (let _0x32e51b in _0x56794c['data']) {
        _0x2a9e99['push'](_0x56794c['data'][_0x32e51b]['mb']);
        _0x46f478['push'](_0x56794c['data'][_0x32e51b]['node_name']);
        _0x128e2b['push'](_0x56794c['data'][_0x32e51b]['traffic']);
      }
      var _0xceb5d8 = {
        'series': [{
          'name': '流量',
          'data': _0x2a9e99
        }],
        'chart': {
          'type': 'bar',
          'toolbar': {
            'show': false
          }
        },
        'plotOptions': {
          'bar': {
            'horizontal': true,
            'columnWidth': ['30%'],
            'endingShape': 'rounded'
          }
        },
        'legend': {
          'show': false
        },
        'dataLabels': {
          'enabled': false
        },
        'stroke': {
          'show': true,
          'width': 0x2,
          'colors': ['transparent']
        },
        'xaxis': {
          'categories': _0x46f478,
          'axisBorder': {
            'show': false
          },
          'axisTicks': {
            'show': false
          },
          'labels': {
            'style': {
              'colors': KTApp['getSettings']()['colors']['gray']['gray-500'],
              'fontSize': '10px',
              'fontFamily': KTApp['getSettings']()['font-family']
            }
          }
        },
        'yaxis': {
          'labels': {
            'style': {
              'colors': KTApp['getSettings']()['colors']['gray']['gray-500'],
              'fontSize': '12px',
              'fontFamily': KTApp['getSettings']()['font-family']
            },
            'formatter': function (_0x1f954a) {
              return _0x1f954a + ' MB';
            }
          }
        },
        'fill': {
          'opacity': 0x1
        },
        'states': {
          'normal': {
            'filter': {
              'type': 'none',
              'value': 0x0
            }
          },
          'hover': {
            'filter': {
              'type': 'none',
              'value': 0x0
            }
          },
          'active': {
            'allowMultipleDataPointsSelection': false,
            'filter': {
              'type': 'none',
              'value': 0x0
            }
          }
        },
        'tooltip': {
          'theme': 'light',
          'style': {
            'fontSize': '12px',
            'fontFamily': KTApp['getSettings']()['font-family']
          },
          'y': {
            'formatter': function (_0x55b73c) {
              return _0x55b73c + ' MB';
            }
          }
        },
        'colors': [KTApp['getSettings']()['colors']['theme']['base']['primary'], KTApp['getSettings']()['colors']['gray']['gray-300']],
        'grid': {
          'borderColor': KTApp['getSettings']()['colors']['gray']['gray-200'],
          'strokeDashArray': 0x4,
          'yaxis': {
            'lines': {
              'show': true
            }
          }
        }
      };
      var _0x153a18 = new ApexCharts(_0x574c90, _0xceb5d8);
      _0x153a18['render']();
    };
    var _0x268719 = function (_0x41e0a0, _0x2ebb35) {
      switch (_0x41e0a0) {
        case 'NodeTraffic':
          console['log'](_0x2ebb35);
          _0x1c2d4f(_0x2ebb35);
          break;
        default:
          return 0x0;
      }
    };
    return {
      'init': function () {
        mt['copytext']();
        if (urlPath['indexOf']('/tutorial') < 0x0) {
          _0x191b30();
        }
      },
      'flowTiaoChart': function (_0x1bdef2) {
        _0x1da73a(_0x1bdef2);
      },
      'RealTimeNodeTrafficChat': function () {
        RealTimeNodeTrafficChat();
      },
      'oneclickImport': function (_0x520f75, _0x372786) {
        _0x4e60f3(_0x520f75, _0x372786);
      },
      'qrcodeImport': function (_0x450157, _0x2774ce) {
        $['getScript'](ASSETS_URL + '/plugins/jQuery-qrcode/jquery.qrcode.min.js', function () {
          _0x178e0d(_0x450157, _0x2774ce);
        });
      },
      'checkin': function () {
        _0x47d7a1();
      },
      'loadTraffic': function () {
        $('#trafficlog')['load']('/user/trafficlog#scatter-plot', function () {});
      },
      'advanceResetFlow': function (_0x497c97 = 'get') {
        _0x37c0cc(_0x497c97);
      }
    };
  }();
  jQuery(document)['ready'](function () {
    index['init']();
  });
}
if (urlPath['indexOf']('/code') >= 0x0) {
  var code = function () {
    var _0x233da5 = function () {
      _0x421bb0();
      _0x5cff19();
      _0x5d41a1();
    };
    var _0x2794be = function (_0x5bf727, _0x3f7dd7, _0x69d0a9, _0x199a60 = 0x0) {
      var _0x2cc625 = 'nano';
      if (/Android|webOS|iPhone|iPod|BlackBerry/i['test'](navigator['userAgent'])) {
        var _0x2cc625 = 'wap';
      } else {
        var _0x2cc625 = 'web';
      }
      var _0x4bb351 = _0x3f7dd7;
      var _0x210756 = _0x199a60 == 0x0 ? parseFloat($('#amount')['val']()) : 0x0;
      if (_0x199a60 == 0x0) {
        if (isNaN(_0x210756)) {
          Swal['fire']({
            'icon': 'error',
            'title': '非法的金额',
            'timer': 0x5dc,
            'showConfirmButton': false
          });
          return false;
        }
      }
      KTApp['blockPage']({
        'overlayColor': '#000000',
        'opacity': 0.3,
        'type': 'v2',
        'state': 'primary',
        'message': '正在处理, 请稍候...'
      });
      $['ajax']({
        'url': '/user/payment/purchase',
        'data': {
          'price': _0x210756,
          'type': _0x4bb351,
          'shopid': _0x69d0a9,
          'client': _0x2cc625,
          'paylist_id': _0x199a60
        },
        'dataType': 'json',
        'type': 'POST',
        'success': function (_0x12a2f4) {
          if (_0x12a2f4.ret === 0x1) {
            if (_0x199a60 == 0x0 && document['getElementById']('ajax_paylist_data')) {
              $('#ajax_paylist_data')['KTDatatable']('reload');
            }
            switch (_0x12a2f4['type']) {
              case 'qrcode':
                $('#metronpay-modal-body-url')['hide']();
                $('#to-pay')['hide']();
                $('#metronpay-modal-body-qrcode')['html']('<div class="text-center"><p>扫描二维码支付</p><div class="pb-3" align="center" id="qrcode"></div><p>支付完毕后会自动跳转</p></div>');
                $('#metronpay-modal-body-qrcode')['show']();
                $['getScript'](ASSETS_URL + '/plugins/jQuery-qrcode/jquery.qrcode.min.js', function () {
                  $('#qrcode')['qrcode']({
                    'text': _0x12a2f4['url']
                  });
                  KTApp['unblockPage']();
                  $('#metronpay-modal')['modal']();
                  setTimeout(function () {
                    _0x2b657b(_0x12a2f4['tradeno']);
                  }, 0xbb8);
                });
                break;
              case 'url':
                $('#metronpay-modal-body-qrcode')['hide']();
                $('#metronpay-modal-body-url')['show']();
                $('#to-pay')['show']();
                document['getElementById']('to-pay')['href'] = _0x12a2f4['url'];
                KTApp['unblockPage']();
                $('#metronpay-modal')['modal']();
                break;
              case 'img':
                $('#metronpay-modal-body-url')['hide']();
                $('#to-pay')['hide']();
                $('#metronpay-modal-body-qrcode')['html']('<p id="loadqr" >正在加载二维码<span class="kt-spinner kt-spinner--md kt-spinner--info"></span></p><img id="wolfpay_qr" src="+data.url+"/>');
                $('#metronpay-modal-body-qrcode')['show']();
                wolfpay_qr['onload'] = function () {
                  $('#loadqr')['hide']();
                };
                KTApp['unblockPage']();
                $('#metronpay-modal')['modal']();
                break;
              default:
                break;
            }
          } else if (_0x12a2f4.ret === 0x0) {
            KTApp['unblockPage']();
            Swal['fire']({
              'icon': 'error',
              'title': _0x12a2f4['msg'],
              'confirmButtonText': '确定'
            });
          } else {
            window['location']['reload']();
          }
        },
        'error': function (_0xca91b7, _0x5b2150) {
          KTApp['unblockPage']();
          Swal['fire']({
            'icon': 'error',
            'title': '发生错误 ' + _0xca91b7['status'],
            'confirmButtonText': '确定'
          })['then'](_0x2834b9 => {
            window['location']['reload']();
          });
        }
      });
    };
    var _0x2b657b = function (_0x8409cf) {
      $['ajax']({
        'type': 'POST',
        'url': '/payment/status',
        'dataType': 'json',
        'data': {
          'tradeno': _0x8409cf
        },
        'success': _0x280fbc => {
          if (_0x280fbc['result'] === 0x1) {
            Swal['fire']({
              'icon': 'success',
              'title': '充值成功!'
            })['then'](_0x3717ae => {
              window['location']['reload']();
            });
            return;
          } else {
            _0x202797('metronPay_status', _0x8409cf);
          }
        },
        'error': _0x5bd2a7 => {
          _0x202797('metronPay_status', _0x8409cf);
        }
      });
    };
    var _0x202797 = function (_0xe58c80, _0x5b3c6b) {
      switch (_0xe58c80) {
        case 'metronPay_status':
          setTimeout(function () {
            _0x2b657b(_0x5b3c6b);
          }, 0xbb8);
          break;
      }
    };
    var _0x4c7f7e = function () {
      $('#pay_code_form .input-group')['addClass']('spinner spinner-primary spinner-right');
      $('#code-update')['attr']('disabled', true);
      setTimeout(function () {
        $['ajax']({
          'type': 'POST',
          'url': 'code',
          'dataType': 'json',
          'data': {
            'code': $('#pay_code')['val']()
          },
          'success': function (_0x8fce72) {
            $('#pay_code_form .input-group')['removeClass']('spinner spinner-primary spinner-right');
            $('#code-update')['attr']('disabled', false);
            if (_0x8fce72.ret) {
              Swal['fire']({
                'icon': 'success',
                'title': _0x8fce72['msg'],
                'confirmButtonText': '确定'
              })['then'](_0x47ab9c => {
                window['location']['reload']();
              });
            } else if (_0x8fce72.ret === 0x0) {
              Swal['fire']({
                'icon': 'error',
                'title': _0x8fce72['msg'],
                'confirmButtonText': '确定'
              });
            } else {
              window['location']['reload']();
            }
          },
          'error': function (_0x1f6ebd) {
            $('#pay_code_form .input-group')['removeClass']('spinner spinner-primary spinner-right');
            $('#code-update')['attr']('disabled', false);
            Swal['fire']({
              'icon': 'error',
              'title': '发生错误：' + _0x1f6ebd['status'],
              'confirmButtonText': '确定'
            });
          }
        });
      }, 0x3e8);
    };
    var _0x5ef77e = function (_0x358217) {
      Swal['fire']({
        'icon': 'warning',
        'title': '是否折算套餐?',
        'html': '扣除相应的手续费折算后, 按剩余价值退还相应的金额到钱包余额',
        'showCancelButton': true,
        'confirmButtonText': '确定折算',
        'cancelButtonText': '取消'
      })['then'](_0x3feee7 => {
        if (_0x3feee7['value']) {
          swal['fire']({
            'title': '正在处理中',
            'text': '请耐心等候...',
            'onOpen': function () {
              swal['showLoading']();
            }
          });
          $['ajax']({
            'type': 'POST',
            'url': '/user/packageconversion',
            'dataType': 'json',
            'data': {
              'id': _0x358217
            },
            'success': function (_0x44dee4) {
              if (_0x44dee4.ret === 0x1) {
                window['conversionID'] = _0x358217;
                $('#zs_name')['html']('商品名称：' + _0x44dee4['name']);
                $('#zs_type')['html']('商品类型：' + _0x44dee4['ratio']['name']);
                $('#zs_the')['html']('折算方式：' + _0x44dee4['ratio']['type']);
                $('#zs_ppt')['html']('剩余比例：' + _0x44dee4['ratio'].ppt + ' %');
                $('#zs_used')['html']('扣除时长：' + _0x44dee4['ratio']['time']['used_gs'] + ' 天 &nbsp;&nbsp;&nbsp; 扣除流量：' + _0x44dee4['ratio']['flow']['used_gb'] + ' GB');
                $('#zs_money')['html']('返还金额：' + _0x44dee4['money_a'] + ' 元 &nbsp;&nbsp;&nbsp; 手续费' + _0x44dee4['hdpr'] + '%：' + _0x44dee4['hdfe'] + ' 元 &nbsp;&nbsp;&nbsp; 实际返还：' + _0x44dee4['money'] + ' 元');
                $('#PackageConversion-modal')['modal']();
                swal['close']();
              } else {
                Swal['fire']({
                  'icon': 'error',
                  'title': _0x44dee4['msg'],
                  'timer': 0x9c4,
                  'showConfirmButton': false
                });
              }
            },
            'error': function (_0x382a0d) {
              Swal['fire']({
                'icon': 'error',
                'title': '发生错误：' + _0x382a0d['status']
              });
            }
          });
        }
      });
    };
    var _0x26ce6a = function () {
      $('#Conversion_ok')['text']('正在处理')['addClass']('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light')['attr']('disabled', true);
      $['ajax']({
        'type': 'POST',
        'url': '/user/packageconversion',
        'dataType': 'json',
        'data': {
          'id': conversionID,
          'ok': 'ok'
        },
        'success': function (_0x216e20) {
          $('#Conversion_ok')['text']('确定折算')['removeClass']('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light')['attr']('disabled', false);
          if (_0x216e20.ret === 0x1) {
            Swal['fire']({
              'icon': 'success',
              'title': '折算成功',
              'html': _0x216e20['msg'],
              'onClose': () => {
                window['location']['reload']();
              }
            });
          } else {
            Swal['fire']({
              'icon': 'error',
              'title': _0x216e20['msg'],
              'timer': 0x9c4,
              'showConfirmButton': false
            });
          }
          $('#PackageConversion-modal')['modal']('hide');
          $('.modal-backdrop')['remove']();
        },
        'error': function (_0x35387d) {
          $('#Conversion_ok')['text']('确定折算')['removeClass']('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light')['attr']('disabled', false);
          Swal['fire']({
            'icon': 'error',
            'title': '发生错误：' + _0x35387d['status']
          });
        }
      });
    };
    var _0x421bb0 = function () {
      var _0x138748 = $('#ajax_code_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/ajax_data/table/code',
              'map': function (_0x286565) {
                var _0x4fe3c4 = _0x286565;
                if (typeof _0x286565['data'] !== 'undefined') {
                  _0x4fe3c4 = _0x286565['data'];
                }
                return _0x4fe3c4;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 0x5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'search': {
          'input': $('#generalSearch')
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [0x5]
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载充值记录',
            'noRecords': '无充值记录'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': 'ID',
          'sortable': 'desc',
          'width': 0x28,
          'type': 'number',
          'selector': false,
          'autoHide': false,
          'textAlign': 'center'
        }, {
          'field': 'code',
          'title': '支付方式',
          'sortable': false
        }, {
          'field': 'number',
          'title': '充值金额',
          'autoHide': false
        }, {
          'field': 'usedatetime',
          'title': '充值时间',
          'autoHide': false
        }]
      });
    };
    var _0x5d41a1 = function () {
      var _0x41a9eb = $('#ajax_paylist_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/ajax_data/table/paylist',
              'map': function (_0x54b6a2) {
                var _0x1504b8 = _0x54b6a2;
                if (typeof _0x54b6a2['data'] !== 'undefined') {
                  _0x1504b8 = _0x54b6a2['data'];
                }
                return _0x1504b8;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 0x5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [-0x1, 0x5, 0xa, 0x14, 0x1e, 0x32, 0x64]
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载记录',
            'noRecords': '无记录'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': 'ID',
          'sortable': 'desc',
          'type': 'number',
          'width': 0x32,
          'selector': false,
          'textAlign': 'center'
        }, {
          'field': 'total',
          'title': '金额',
          'width': 0x46
        }, {
          'field': 'shop',
          'title': '支付用途',
          'sortable': false
        }, {
          'field': 'tradeno',
          'title': '订单号',
          'sortable': false
        }, {
          'field': 'datetime',
          'title': '创建时间'
        }, {
          'field': 'status',
          'title': '金额状态',
          'autoHide': false,
          'template': function (_0x472bfd) {
            var _0x58f571 = {
              1: {
                'title': '已到账',
                'class': ' label-light-success'
              },
              2: {
                'title': 'Delivered',
                'class': ' label-light-danger'
              },
              3: {
                'title': 'Canceled',
                'class': ' label-light-primary'
              },
              4: {
                'title': 'Success',
                'class': ' label-light-success'
              },
              5: {
                'title': 'Info',
                'class': ' label-light-info'
              },
              0: {
                'title': '未支付',
                'class': ' label-light-danger'
              },
              7: {
                'title': 'Warning',
                'class': ' label-light-warning'
              }
            };
            return '<span class="label font-weight-bold label-lg ' + _0x58f571[_0x472bfd['status']]['class'] + ' label-inline">' + _0x58f571[_0x472bfd['status']]['title'] + '</span>';
          }
        }, {
          'field': 'shop_status',
          'title': '套餐状态',
          'sortable': false,
          'template': function (_0x1dff0f) {
            var _0x513502 = {
              3: {
                'title': '购买失败',
                'state': 'danger'
              },
              1: {
                'title': '钱包充值',
                'state': 'success'
              },
              2: {
                'title': '购买成功',
                'state': 'success'
              },
              0: {
                'title': '等待支付',
                'state': 'primary'
              }
            };
            return '<span class="label label-' + _0x513502[_0x1dff0f['shop_status']]['state'] + ' label-dot mr-2"></span><span class="font-weight-bold text-' + _0x513502[_0x1dff0f['shop_status']]['state'] + '">' + _0x513502[_0x1dff0f['shop_status']]['title'] + '</span>';
          }
        }, {
          'field': 'caozuo',
          'title': '操作',
          'autoHide': false,
          'sortable': false
        }]
      });
      $('#kt_form_status')['on']('change', function () {
        _0x41a9eb['search']($(this)['val']()['toLowerCase'](), 'status');
      });
      $('#kt_form_status')['selectpicker']();
    };
    var _0x5cff19 = function () {
      var _0x28bd13 = $('#ajax_shop_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/ajax_data/table/shop',
              'map': function (_0x329b7c) {
                var _0x1ea208 = _0x329b7c;
                if (typeof _0x329b7c['data'] !== 'undefined') {
                  _0x1ea208 = _0x329b7c['data'];
                }
                return _0x1ea208;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 0x5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'search': {
          'input': $('#generalSearch')
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [-0x1, 0x5, 0xa, 0x14, 0x1e, 0x32, 0x64]
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载套餐记录',
            'noRecords': '无套餐记录'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': 'ID',
          'sortable': 'desc',
          'width': 0x28,
          'type': 'number',
          'selector': false,
          'textAlign': 'center'
        }, {
          'field': 'shopname',
          'title': '商品名称',
          'sortable': false
        }, {
          'field': 'datetime',
          'title': '购买时间'
        }, {
          'field': 'price',
          'title': '价格',
          'template': function (_0x25f01b) {
            return _0x25f01b['price'] + '元';
          }
        }, {
          'field': 'renew',
          'title': '续费时间'
        }, {
          'field': 'auto_reset',
          'title': '续费时重置流量',
          'sortable': false,
          'autoHide': true
        }, {
          'field': 'usedd',
          'title': '状态',
          'autoHide': false,
          'template': function (_0x1a6853) {
            var _0x5f38f9 = {
              0: {
                'title': '已失效',
                'class': ' label-light-danger'
              },
              1: {
                'title': '生效中',
                'class': ' label-light-success'
              },
              2: {
                'title': '已退还',
                'class': ' label-light-warning'
              },
              3: {
                'title': 'Canceled',
                'class': ' label-light-primary'
              },
              4: {
                'title': 'Success',
                'class': ' label-light-success'
              },
              5: {
                'title': 'Info',
                'class': ' label-light-info'
              }
            };
            return '<span class="label font-weight-bold label-lg ' + _0x5f38f9[_0x1a6853['usedd']]['class'] + ' label-inline">' + _0x5f38f9[_0x1a6853['usedd']]['title'] + '</span>';
          }
        }, {
          'field': 'shop_pkcs',
          'title': '套餐折算',
          'autoHide': false,
          'sortable': false,
          'template': function (_0x3f17b8) {
            var _0x351ea4 = {
              0: {
                'title': '不支持',
                'state': 'danger'
              },
              1: {
                'title': '可折算',
                'state': 'success'
              },
              2: {
                'title': '已退还',
                'state': 'primary'
              }
            };
            return '<span class="label label-' + _0x351ea4[_0x3f17b8['shop_pkcs']]['state'] + ' label-dot mr-2"></span><span class="font-weight-bold text-' + _0x351ea4[_0x3f17b8['shop_pkcs']]['state'] + '">' + _0x351ea4[_0x3f17b8['shop_pkcs']]['title'] + '</span>';
          }
        }, {
          'field': 'caozuo',
          'title': '操作',
          'sortable': false,
          'overflow': 'visible',
          'autoHide': false
        }]
      });
      $('#kt_form_usedd')['on']('change', function () {
        _0x28bd13['search']($(this)['val']()['toLowerCase'](), 'usedd');
      });
      $('#kt_form_usedd')['selectpicker']();
    };
    return {
      'init': function () {
        _0x233da5();
      },
      'payTab': function () {
        $('#code-getmoney, #code-setmoney')['toggle']();
      },
      'metronPay': function (_0x251288, _0x1bd777, _0x2db269, _0x21b7fa = 0x0) {
        if (_0x251288 == 'modal') {
          if (isNaN(parseFloat($('#amount')['val']()))) {
            Swal['fire']({
              'icon': 'error',
              'title': '非法的金额',
              'confirmButtonText': '确定'
            });
            return false;
          }
          $('#metronPay_modal')['modal']();
        } else if (_0x1bd777 == '' && _0x21b7fa != 0x0) {
          $('#metronPay_restart_modal')['modal']();
        } else if (_0x21b7fa != 0x0) {
          _0x2794be(_0x251288, _0x1bd777, _0x2db269, _0x21b7fa);
        } else {
          _0x2794be(_0x251288, $('#pay_the li .active')['attr']('data-name'), _0x2db269, _0x21b7fa);
        }
      },
      'metronPay_restart': function (_0x1e6d46, _0x1e5fe4, _0x561ab9, _0xf9837a = 0x0) {
        if (_0x1e5fe4 == '' && _0xf9837a != 0x0) {
          window['$restart_paylist_id'] = _0xf9837a;
          $('#metronPay_restart_modal')['modal']();
        } else {
          var _0x2e93a1 = $('#reset_pay_the li .active')['attr']('data-name');
          _0x2794be(_0x1e6d46, _0x2e93a1, _0x561ab9, $restart_paylist_id);
        }
      },
      'update': function () {
        _0x4c7f7e();
      },
      'PackageConversion': function (_0x4129b0) {
        _0x5ef77e(_0x4129b0);
      },
      'Conversion_ok': function () {
        _0x26ce6a();
      }
    };
  }();
  jQuery(document)['ready'](function () {
    code['init']();
  });
}
if (urlPath['indexOf']('/shop') >= 0x0) {
  var shop = function () {
    var _0x5e737d = function (_0x274111, _0x5d7512, _0x513348) {
      if (!_0x513348) {
        $('#buytext-' + _0x274111)['text']('正在获取订单')['addClass']('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light')['attr']('disabled', true);
      }
      if ($('#coupon')['val']() == '') {
        $('#shop_credit')['hide']('750');
        $('#use_coupon_code')['text']('使用优惠码');
      }
      window['shopinfo'] = new Array();
      shopinfo['id'] = _0x274111;
      shopinfo.auto = _0x5d7512;
      $['ajax']({
        'type': 'POST',
        'url': '/user/coupon_check',
        'dataType': 'json',
        'data': {
          'coupon': $('#coupon')['val'](),
          'shop': shopinfo['id']
        },
        'success': function (_0x59fafe) {
          if (_0x59fafe.ret === 0x1) {
            shopinfo['total'] = parseFloat(_0x59fafe['total']);
            shopinfo['name'] = _0x59fafe['name'];
            shopinfo['coupon'] = $('#coupon')['val']();
            shopinfo['user_money'] = parseFloat(_0x59fafe['money']);
            shopinfo['need'] = _0x59fafe['need'];
            $('#shop_name')['html']('商品名称：' + shopinfo['name']);
            $('#shop_total')['html']('套餐金额：' + shopinfo['total'] + ' 元');
            if (shopinfo['need'] > 0x0) {
              $('#shop_payment')['show']('750');
              $('#order_input')['text']('余额支付')['show']('750');
            } else if (shopinfo['need'] <= 0x0) {
              $('#shop_stneed')['html']('余额抵扣：' + shopinfo['total'] + ' 元');
              $('#shop_payment')['hide']('750');
              $('#order_input')['text']('余额支付')['show']('750');
            }
            if (shopinfo.auto == 0x0) {
              document['getElementById']('autor')['style']['display'] = 'none';
            } else {
              document['getElementById']('autor')['style']['display'] = '';
            }
            if (!_0x513348) {
              $('#buytext-' + _0x274111)['text']('购买')['removeClass']('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light')['attr']('disabled', false);
              $('#buy_modal')['modal']();
            } else {
              $('#input_coupon_code')['hide']('750');
              if (shopinfo['coupon']) {
                $('#shop_credit')['html']('优惠额度：' + _0x59fafe['credit'] + '&nbsp;&nbsp;|&nbsp;&nbsp;优惠码：' + $('#coupon')['val']())['show']('750');
                $('#use_coupon_code')['text']('优惠码：' + shopinfo['coupon'])['show']('750');
              } else {
                $('#use_coupon_code')['text']('使用优惠码')['show']('750');
              }
            }
          } else {
            if (!_0x513348) {
              $('#buytext-' + _0x274111)['text']('购买')['removeClass']('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light')['attr']('disabled', false);
            }
            Swal['fire']({
              'icon': 'error',
              'title': _0x59fafe['msg']
            });
          }
        },
        'error': function (_0x4b30bb) {
          if (!_0x513348) {
            $('#buytext-' + id)['text']('购买')['removeClass']('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light')['attr']('disabled', false);
          }
          Swal['fire']({
            'icon': 'error',
            'title': '发生错误',
            'html': _0x4b30bb['msg']
          })['then'](_0x255cee => {
            window['location']['reload']();
          });
        }
      });
    };
    var _0x35ee5c = function () {
      if (shopinfo['need'] <= 0x0) {
        _0x5c1216(shopinfo['id']);
      } else {
        var _0x20f2c7 = 'none';
        if (/Android|webOS|iPhone|iPod|BlackBerry/i['test'](navigator['userAgent'])) {
          var _0x20f2c7 = 'wap';
        } else {
          var _0x20f2c7 = 'web';
        }
        if (document['getElementById']('autorenew')['checked']) {
          var _0x3b5029 = shopinfo.auto;
        } else {
          var _0x3b5029 = 0x0;
        }
        var _0x2b134d = $('#pay_the li .active')['attr']('data-name');
        var _0x18b0c0 = 0x0;
        $['ajax']({
          'url': '/user/payment/purchase',
          'data': {
            'price': shopinfo['need'],
            'type': _0x2b134d,
            'client': _0x20f2c7,
            'shopid': shopinfo['id'],
            'shopauto': _0x3b5029,
            'shopcoupon': shopinfo['coupon']
          },
          'dataType': 'json',
          'type': 'POST',
          'success': function (_0x110a4d) {
            if (_0x110a4d.ret == 0x1) {
              switch (_0x110a4d['type']) {
                case 'qrcode':
                  $('#metronpay-modal-body-url')['hide']();
                  $('#to-pay')['hide']();
                  $('#metronpay-modal-body-qrcode')['html']('<div class="text-center"><p>扫描二维码支付</p><div class="pb-3" align="center" id="qrcode"></div><p>支付完毕后会自动跳转</p></div>');
                  $('#metronpay-modal-body-qrcode')['show']();
                  $['getScript'](ASSETS_URL + '/plugins/jQuery-qrcode/jquery.qrcode.min.js', function () {
                    $('#qrcode')['qrcode']({
                      'text': _0x110a4d['url']
                    });
                    KTApp['unblockPage']();
                    $('#metronpay-modal')['modal']();
                    setTimeout(function () {
                      _0x2120bb(_0x110a4d['tradeno']);
                    }, 0xbb8);
                  });
                  break;
                case 'url':
                  $('#metronpay-modal-body-qrcode')['hide']();
                  $('#metronpay-modal-body-url')['show']();
                  $('#to-pay')['show']();
                  document['getElementById']('to-pay')['href'] = _0x110a4d['url'];
                  KTApp['unblockPage']();
                  $('#metronpay-modal')['modal']();
                  break;
                case 'img':
                  $('#metronpay-modal-body-url')['hide']();
                  $('#to-pay')['hide']();
                  $('#metronpay-modal-body-qrcode')['html']('<p id="loadqr" >正在加载二维码<span class="kt-spinner kt-spinner--md kt-spinner--info"></span></p><img id="wolfpay_qr" src="+data.url+"/>');
                  $('#metronpay-modal-body-qrcode')['show']();
                  wolfpay_qr['onload'] = function () {
                    $('#loadqr')['hide']();
                  };
                  KTApp['unblockPage']();
                  $('#metronpay-modal')['modal']();
                  break;
                default:
                  break;
              }
            }
            if (_0x110a4d.ret == 0x0) {
              KTApp['unblockPage']();
              Swal['fire']({
                'icon': 'error',
                'title': _0x110a4d['msg'],
                'timer': 0xbb8,
                'showConfirmButton': false
              });
            }
          },
          'error': function (_0x297aba) {
            KTApp['unblockPage']();
            Swal['fire']({
              'icon': 'error',
              'title': '发生错误 ' + _0x297aba['status']
            })['then'](_0xc1593a => {
              window['location']['reload']();
            });
          }
        });
      }
    };
    var _0x2120bb = function (_0x509bf4) {
      $['ajax']({
        'type': 'POST',
        'url': '/payment/status',
        'dataType': 'json',
        'data': {
          'tradeno': _0x509bf4,
          'checkshop': 0x1
        },
        'success': _0x1fff89 => {
          if (_0x1fff89['result'] === 0x1) {
            $('#metronpay-content')['html']('<div class="text-center"><p>充值已到账，正在为您购买套餐<span class="kt-spinner kt-spinner--md kt-spinner--info"></span></p></div>');
            if (_0x1fff89['buyshop'] === 0x1) {
              Swal['fire']({
                'icon': 'success',
                'title': '购买成功!'
              })['then'](_0x28dd7f => {
                window['location']['href'] = '/user';
              });
              return;
            } else {
              _0x5c5661('metronPay_status', _0x509bf4);
            }
          } else {
            _0x5c5661('metronPay_status', _0x509bf4);
          }
        },
        'error': _0xc7c7c1 => {
          _0x5c5661('metronPay_status', _0x509bf4);
        }
      });
    };
    var _0x5c5661 = function (_0x22350a, _0x1a3f8e) {
      switch (_0x22350a) {
        case 'metronPay_status':
          setTimeout(function () {
            _0x2120bb(_0x1a3f8e);
          }, 0xbb8);
          break;
      }
    };
    var _0x5c1216 = function (_0x2d0a73) {
      if (document['getElementById']('autorenew')['checked']) {
        var _0x12f47d = 0x1;
      } else {
        var _0x12f47d = 0x0;
      }
      var _0x1c5f37 = 0x1;
      $['ajax']({
        'type': 'POST',
        'url': 'buy',
        'dataType': 'json',
        'data': {
          'coupon': $('#coupon')['val'](),
          'shop': _0x2d0a73,
          'autorenew': _0x12f47d,
          'disableothers': _0x1c5f37
        },
        'success': function (_0x29b590) {
          KTApp['unblockPage']();
          if (_0x29b590.ret) {
            swal['fire']({
              'icon': 'success',
              'title': '购买成功',
              'confirmButtonText': '用户中心',
              'confirmButtonClass': 'btn btn-primary',
              'onClose': () => {
                window['location']['href'] = '/user';
              }
            });
          } else {
            Swal['fire']({
              'icon': 'warning',
              'title': '购买失败',
              'html': _0x29b590['msg']
            });
          }
        },
        'error': function (_0x4753d2) {
          KTApp['unblockPage']();
          Swal['fire']({
            'typeicon': 'error',
            'title': _0x4753d2['status'] + '  发生了错误。'
          });
        }
      });
    };
    var _0x27aa95 = function () {
      var _0x14fce2 = $('#traffic-package li .active')['attr']('data-name');
      if (_0x14fce2 == null) {
        Swal['fire']({
          'icon': 'error',
          'title': '请选择流量包',
          'timer': 0x5dc,
          'showConfirmButton': false
        });
        return;
      }
      $('.buyTrafficPackage')['text']('购买中')['addClass']('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light')['attr']('disabled', true);
      $['ajax']({
        'type': 'POST',
        'url': '/user/buy_traffic_package',
        'dataType': 'json',
        'data': {
          'shop': _0x14fce2
        },
        'success': _0x3bc49e => {
          $('.buyTrafficPackage')['text']('购买')['removeClass']('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light')['attr']('disabled', false);
          mt['ajax_swal'](_0x3bc49e, '/user');
        },
        'error': function (_0x11c72c) {
          Swal['fire']({
            'icon': 'error',
            'title': '出错啦',
            'html': _0x11c72c['msg'],
            'onClose': () => {
              window['location']['reload']();
            }
          });
        }
      });
    };
    var _0xea8a29 = function () {
      var _0x5d41e5 = new Date();
      var _0x30f6e6 = _0x5d41e5['getTime']();
      var _0x88303e = new Date(shop_activity_time);
      var _0x440ba1 = _0x88303e['getTime']();
      var _0x39c0d9 = _0x440ba1 - _0x30f6e6;
      var _0x16d3ad, _0x409fed, _0x2fc834, _0x317eb5;
      if (_0x39c0d9 >= 0x0) {
        _0x16d3ad = Math['floor'](_0x39c0d9 / 0x3e8 / 0x3c / 0x3c / 0x18);
        _0x409fed = Math['floor'](_0x39c0d9 / 0x3e8 / 0x3c / 0x3c % 0x18);
        _0x2fc834 = Math['floor'](_0x39c0d9 / 0x3e8 / 0x3c % 0x3c);
        _0x317eb5 = Math['floor'](_0x39c0d9 / 0x3e8 % 0x3c);
        if (_0x317eb5 < 0xa) {
          _0x317eb5 = '0' + _0x317eb5;
        }
        if (_0x2fc834 < 0xa) {
          _0x2fc834 = '0' + _0x2fc834;
        }
        if (_0x409fed < 0xa) {
          _0x409fed = '0' + _0x409fed;
        }
        if (_0x16d3ad > 0x0) {
          document['getElementById']('_d')['innerHTML'] = _0x16d3ad + ' 天';
        } else {
          document['getElementById']('_d')['innerHTML'] = '';
        }
        if (_0x16d3ad == 0x0 && _0x409fed == 0x0) {
          document['getElementById']('_h')['innerHTML'] = '';
        } else {
          document['getElementById']('_h')['innerHTML'] = _0x409fed + ' 时';
        }
        if (_0x16d3ad == 0x0 && _0x409fed == 0x0 && _0x2fc834 == 0x0) {
          document['getElementById']('_m')['innerHTML'] = '';
        } else {
          document['getElementById']('_m')['innerHTML'] = _0x2fc834 + ' 分';
        }
        document['getElementById']('_s')['innerHTML'] = _0x317eb5 + ' 秒';
      } else {
        document['getElementById']('_t')['innerHTML'] = '活动已结束';
        document['getElementById']('buy_activity')['disabled'] = true;
        $('#buy_activity')['text']('活动已结束');
        $('#shop_activity_no')['hide']('500');
        return;
      }
      setTimeout(_0xea8a29, 0x32);
    };
    return {
      'metronBuy': function (_0x8d067a, _0x3f790a) {
        _0x5e737d(_0x8d067a, _0x3f790a);
      },
      'coupon': function (_0x4e1e01) {
        if (_0x4e1e01 == 'clear') {
          $('#coupon')['val']('');
          shop['couponre']();
          return;
        }
        $('#use_coupon_code')['hide']('750');
        $('#order_input')['hide']('750');
        $('#input_coupon_code')['show']('750');
      },
      'couponre': function () {
        _0x5e737d(shopinfo['id'], shopinfo.auto, true);
      },
      'buyok': function (_0x2afc10) {
        KTApp['blockPage']({
          'overlayColor': '#000000',
          'opacity': 0.3,
          'type': 'v2',
          'state': 'primary',
          'message': '正在请求支付, 请稍候...'
        });
        _0x35ee5c();
      },
      'buy_traffic': function () {
        _0x27aa95();
      },
      'countTime': function () {
        _0xea8a29();
      }
    };
  }();
  if (typeof shop_activity_time != 'undefined') {
    shop['countTime']();
  }
}
if (urlPath['indexOf']('/node') >= 0x0) {
  var node = function () {
    var _0x404576 = function () {
      mt['copytext']('modal');
      _0x4d4ecc();
    };
    var _0x4d4ecc = function () {
      $('#filter_mode, #filter_sort, #filter_mininame')['selectpicker']();
      $('#filter_mode')['on']('changed.bs.select', function (_0x38f923) {
        _0x3a40b0($('option:selected')['val']());
      });
    };
    var _0x13bc27 = function (_0x122bcc) {
      swal['fire']({
        'title': '正在获取节点配置',
        'onOpen': function () {
          swal['showLoading']();
        }
      });
      $['ajax']({
        'type': 'GET',
        'url': '/user/nodeinfo/' + _0x122bcc,
        'dataType': 'json',
        'data': {},
        'success': function (_0xca4755) {
          if (_0xca4755.ret === 0x1) {
            var _0x12c334 = _0xca4755['info'];
            switch (_0xca4755['sort']) {
              case 0x0:
              case 0xa:
                for (let _0x3467c5 in _0x12c334) {
                  $('#tab-ssr-modal-config-' + _0x3467c5)['html'](_0x12c334[_0x3467c5]);
                }
                $['getScript'](ASSETS_URL + '/plugins/jQuery-qrcode/jquery.qrcode.min.js', function () {
                  $('#nodeinfo-ssr-modal .tab-pane a')['attr']('href', _0xca4755['url']);
                  $('#nodeinfo-ssr-qrcode')['qrcode']({
                    'text': _0xca4755['url']
                  });
                  $('#nodeinfo-ssr-modal')['modal']();
                });
                $('#nodeinfo-ssr-modal')['on']('hide.bs.modal', function () {
                  setTimeout(function () {
                    $('#nodeinfo-ssr-qrcode')['empty']();
                  }, 0x1f4);
                });
                break;
              case 0xb:
              case 0xc:
                for (let _0x27bd67 in _0x12c334) {
                  $('#nodeinfo-v2ray-modal-' + _0x27bd67)['html'](_0x12c334[_0x27bd67]);
                }
                if (_0x12c334['net'] == 'ws') {
                  $('#nodeinfo-v2ray-modal-path')['parents']('p')['show']();
                } else {
                  $('#nodeinfo-v2ray-modal-path')['parents']('p')['hide']();
                }
                if (_0x12c334['net'] == 'tcp') {
                  $('#nodeinfo-v2ray-modal-type')['parents']('p')['show']();
                } else {
                  $('#nodeinfo-v2ray-modal-type')['parents']('p')['hide']();
                }
                if (_0x12c334['net'] == 'ws' && _0x12c334['tls'] == 'tls' || _0x12c334['net'] == 'tcp' && _0x12c334['tls'] == 'tls' || _0x12c334['tls'] == 'tls') {
                  $('#nodeinfo-v2ray-modal-tls')['parents']('p')['show']();
                } else {
                  $('#nodeinfo-v2ray-modal-tls')['parents']('p')['hide']();
                }
                $('#nodeinfo-v2ray-modal-url')['attr']('data-clipboard-text', _0xca4755['url']);
                $('#nodeinfo-v2ray-modal')['modal']();
                break;
              case 0xd:
                if (_0xca4755['info'] == null) {
                  $('#nodeinfo-v2rayPlug-modal-body')['html']('<p>您的加密方式非 AEAD 系列，无法使用此节点.</p>');
                } else {
                  for (let _0x3dcfe6 in _0x12c334) {
                    $('#nodeinfo-v2rayPlug-modal-' + _0x3dcfe6)['html'](_0x12c334[_0x3dcfe6]);
                  }
                }
                $('#nodeinfo-v2rayPlug-modal')['modal']();
                break;
              case 0xe:
                for (let _0x1cde72 in _0x12c334) {
                  $('#nodeinfo-trojan-modal-' + _0x1cde72)['html'](_0x12c334[_0x1cde72]);
                }
                $('#nodeinfo-trojan-modal')['modal']();
                break;
              default:
                mt['swal']('该节点暂不支持查看配置', 'error');
                break;
            }
            swal['close']();
          } else if (_0xca4755.ret === -0x1) {
            window['location']['reload']();
          } else {
            swal['close']();
            mt['ajax_swal'](_0xca4755);
          }
        },
        'error': function (_0x3bfd09) {
          Swal['fire']({
            'icon': 'error',
            'title': '发生错误：' + _0x3bfd09['status']
          });
          swal['close']();
        }
      });
    };
    var _0x102ce4 = function () {
      $('#node_filter_save_up_text,#node_filter_save_down_text')['text']('正在保存');
      $('#node_filter_save_up,#node_filter_save_down')['addClass']('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light')['attr']('disabled', true);
      var _0x4edb2b = $('#filter_mode')['val']();
      var _0x12367a = [];
      switch (_0x4edb2b) {
        case 'all':
          _0x12367a['mode'] = 'all';
          break;
        case 'nodes_class':
          _0x12367a['mode'] = 'nodes_class';
          _0x12367a['nodes_class'] = [];
          if (typeof $('input[name="radio-nodes_class-filter"]:checked')['val']() !== 'undefined') {
            _0x12367a['nodes_class-the'] = '>=';
            _0x12367a['nodes_class-value'] = $('input[name="radio-nodes_class-filter"]:checked')['val']();
          } else {
            _0x12367a['nodes_class']['the'] = '=';
            _0x12367a['nodes_class']['value'] = [];
            $('input[name=\'checkbox-nodes_class-filter\']:checked')['each'](function (_0x430eed) {
              _0x12367a['nodes_class']['value'][_0x430eed] = $(this)['val']();
            });
          }
          break;
        case 'nodes_id':
          _0x12367a['mode'] = 'nodes_id';
          _0x12367a['nodes_id'] = [];
          $('input[name=\'nodes_id-filter\']:checked')['each'](function (_0x3f7afe) {
            _0x12367a['nodes_id'][_0x3f7afe] = $(this)['val']();
          });
          break;
      }
      _0x12367a['sort'] = $('#filter_sort')['val']();
      _0x12367a['mininame'] = $('#filter_mininame')['val']();
      $['ajax']({
        'url': '/user/node_filter',
        'data': {
          'filter_mode': _0x12367a['mode'],
          'nodes_class_the': _0x12367a['nodes_class-the'],
          'nodes_class_value': _0x12367a['nodes_class-value'],
          'nodes_id': _0x12367a['nodes_id'],
          'filter_sort': _0x12367a['sort'],
          'filter_mininame': _0x12367a['mininame']
        },
        'dataType': 'json',
        'type': 'POST',
        'success': function (_0x48837e) {
          $('#node_filter_save_up_text,#node_filter_save_down_text')['text']('保存更改');
          $('#node_filter_save_up,#node_filter_save_down')['removeClass']('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light')['attr']('disabled', false);
          if (_0x48837e.ret === 0x1) {
            Swal['fire']({
              'icon': 'success',
              'title': _0x48837e['msg']
            })['then'](_0xb96d44 => {
              window['location']['reload']();
            });
          }
          if (_0x48837e.ret === 0x0) {
            Swal['fire']({
              'icon': 'error',
              'title': _0x48837e['msg']
            });
          }
          if (_0x48837e.ret === -0x1) {
            window['location']['reload']();
          }
        },
        'error': function (_0x1dd6fb) {
          $('#node_filter_save_up,#node_filter_save_down')['text']('保存更改')['removeClass']('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light')['attr']('disabled', false);
          Swal['fire']({
            'icon': 'error',
            'title': '发生错误 ' + _0x1dd6fb['status']
          })['then'](_0xcb6d2a => {
            window['location']['reload']();
          });
        }
      });
    };
    var _0x3437d0 = function (_0x3ac00c, _0x4ba71b, _0x150837) {
      switch (_0x4ba71b) {
        case true:
          $('input[name=' + _0x3ac00c + ']')['not'](':disabled')['prop']('checked', true);
          break;
        case false:
          $('input[name=' + _0x3ac00c + ']')['prop']('checked', false);
          break;
        case 'anti':
          $('input[name=' + _0x3ac00c + ']')['each'](function () {
            if ($(this)['is'](':checked')) {
              $(this)['prop']('checked', false);
            } else {
              $(this)['not'](':disabled')['prop']('checked', true);
            }
          });
          break;
        case 'node_class':
          $('.node_class-' + _0x150837)['prop']('checked', true);
          break;
      }
    };
    var _0x3a40b0 = function (_0x46c2c2) {
      switch (_0x46c2c2) {
        case 'all':
          $('#filter_mode-all')['show']();
          $('#filter_mode-nodes_class')['hide']();
          $('#filter_mode-nodes_id')['hide']();
          $('#check-node_class, #check-all')['hide']();
          break;
        case 'nodes_class':
          $('#filter_mode-all')['hide']();
          $('#filter_mode-nodes_class')['show']();
          $('#filter_mode-nodes_id')['hide']();
          $('#check-node_class, #check-all')['hide']();
          break;
        case 'nodes_id':
          $('#filter_mode-all')['hide']();
          $('#filter_mode-nodes_class')['hide']();
          $('#filter_mode-nodes_id')['show']();
          $('#check-node_class, #check-all')['show']();
          break;
      }
    };
    return {
      'init': function () {
        _0x404576();
      },
      'NodeInfo'(_0x270bd3) {
        _0x13bc27(_0x270bd3);
      },
      'Classinsufficient': function () {
        Swal['fire']({
          'icon': 'error',
          'title': '等级不足',
          'html': '您当前的等级不能使用该节点'
        });
      },
      'nodeFilterInit': function () {
        $('#filter_mode')['selectpicker']();
        $('#filter_sort')['selectpicker']();
        $('#filter_mininame')['selectpicker']();
        $('#filter_mode')['on']('changed.bs.select', function (_0x5c1f59) {
          _0x3a40b0($('option:selected')['val']());
        });
      },
      'nodeFilterSave': function () {
        _0x102ce4();
      },
      'allCheck': function (_0x32b774, _0x1de3c6, _0x170faf) {
        _0x3437d0(_0x32b774, _0x1de3c6, _0x170faf);
      }
    };
  }();
  jQuery(document)['ready'](function () {
    node['init']();
  });
}
if (urlPath['indexOf']('/setting') > -0x1) {
  var setting = function () {
    var _0x4e3e3c = function () {
      var _0x1be650 = new KTOffcanvas('user_profile_list', {
        'overlay': true,
        'baseClass': 'offcanvas-mobile',
        'toggleBy': 'user_profile_mobile_toggle'
      });
      $('#user_profile_list a')['each'](function () {
        if (urlPath['indexOf']($(this)['attr']('href')) > -0x1) {
          $(this)['addClass']('active');
        }
      });
      if (urlPath['indexOf']('/setting/logs') > -0x1) {
        _0x49e31b();
        _0x2fd938();
        _0x4d975c();
      }
      if (urlPath['indexOf']('/setting/traffic_log') > -0x1) {
        _0x2056ad();
      }
      if (urlPath['indexOf']('/setting/profile') > -0x1) {
        _0x3c1f84('init');
      }
      if (urlPath['indexOf']('/setting/safe') > -0x1) {
        _0x3de2b3();
      }
      if (urlPath['indexOf']('/setting/detect') > -0x1) {
        _0x6882c7();
      }
      if (urlPath['indexOf']('/setting/telegram') > -0x1) {
        _0x425d89();
      }
      if (urlPath['indexOf']('/setting/sublink') > -0x1) {
        _0xae988d('init');
      }
      if (urlPath['indexOf']('/setting/relay') > -0x1) {
        _0x3344f0();
        _0xdfe23c();
        $('#add-relay-modal')['on']('show.bs.modal', function () {
          $('#source_node')['selectpicker']();
          $('#dist_node')['selectpicker']();
          $('#port')['selectpicker']();
        });
      }
      if (urlPath['indexOf']('/setting/invite') > -0x1) {
        _0x3a5324();
        _0x3b73e6();
        mt['copytext']();
        $('#agent_setting_modal')['on']('show.bs.modal', function () {
          $('#take_account_type')['selectpicker']();
        });
      }
    };
    var _0x49e31b = function () {
      var _0x483147 = $('#ajax_login_log_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/ajax_data/table/login_log',
              'map': function (_0x5c41f3) {
                var _0x48424a = _0x5c41f3;
                if (typeof _0x5c41f3['data'] !== 'undefined') {
                  _0x48424a = _0x5c41f3['data'];
                }
                return _0x48424a;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 0x5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'theme': 'default',
          'scroll': false,
          'footer': false
        },
        'sortable': false,
        'pagination': false,
        'toolbar': {
          'items': {
            'info': false,
            'pagination': {
              'pageSizeSelect': [0x5, 0xa],
              'navigation': {
                'prev': true,
                'next': true,
                'first': true,
                'last': true
              }
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载记录',
            'noRecords': '暂无记录'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'ip',
          'title': 'IP地址'
        }, {
          'field': 'location',
          'title': '归属地'
        }]
      });
    };
    var _0x2fd938 = function () {
      var _0x11d5ba = $('#ajax_use_log_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/ajax_data/table/use_log',
              'map': function (_0x481957) {
                var _0x380391 = _0x481957;
                if (typeof _0x481957['data'] !== 'undefined') {
                  _0x380391 = _0x481957['data'];
                }
                return _0x380391;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 0x5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'theme': 'default',
          'scroll': false,
          'footer': false
        },
        'sortable': false,
        'pagination': false,
        'toolbar': {
          'items': {
            'info': false,
            'pagination': {
              'pageSizeSelect': [0x5, 0xa],
              'navigation': {
                'prev': true,
                'next': true,
                'first': true,
                'last': true
              }
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载记录',
            'noRecords': '暂无记录'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'ip',
          'title': 'IP地址'
        }, {
          'field': 'location',
          'title': '归属地'
        }]
      });
    };
    var _0x4d975c = function () {
      var _0x4c89b9 = $('#ajax_subscribe_log_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/ajax_data/table/subscribe_log',
              'map': function (_0x499dca) {
                var _0xbe32d0 = _0x499dca;
                if (typeof _0x499dca['data'] !== 'undefined') {
                  _0xbe32d0 = _0x499dca['data'];
                }
                return _0xbe32d0;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 0x5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'search': {
          'input': $('#generalSearch')
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [-0x1, 0x5, 0xa, 0x14, 0x1e, 0x32, 0x64]
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载订阅记录',
            'noRecords': '无订阅记录'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': 'ID',
          'sortable': 'desc',
          'width': 0x50,
          'type': 'number',
          'selector': false,
          'textAlign': 'center'
        }, {
          'field': 'subscribe_type',
          'title': '订阅类型'
        }, {
          'field': 'request_ip',
          'title': 'IP地址'
        }, {
          'field': 'location',
          'title': '归属地',
          'sortable': false
        }, {
          'field': 'request_time',
          'title': '订阅时间'
        }, {
          'field': 'request_user_agent',
          'title': 'User-Agent',
          'sortable': false,
          'autoHide': true
        }, {
          'field': 'caozuo',
          'title': '操作',
          'autoHide': false,
          'sortable': false
        }]
      });
      $('#subscribe_log_type')['on']('change', function () {
        _0x4c89b9['search']($(this)['val']()['toLowerCase'](), 'subscribe_type');
      });
      $('#subscribe_log_type')['selectpicker']();
    };
    var _0x2056ad = function () {
      var _0x175cce = $('#ajax_traffic_log_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/ajax_data/table/traffic_log',
              'map': function (_0xd1eda5) {
                var _0x224838 = _0xd1eda5;
                if (typeof _0xd1eda5['data'] !== 'undefined') {
                  _0x224838 = _0xd1eda5['data'];
                }
                return _0x224838;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 0xa,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': false,
        'pagination': true,
        'search': {
          'input': $('#generalSearch')
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [0x5, 0xa, 0x14, 0x1e, 0x32, 0x64]
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载...',
            'noRecords': '暂无记录'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': '记录ID',
          'sortable': 'desc',
          'width': 0x50,
          'type': 'number',
          'selector': false,
          'textAlign': 'center'
        }, {
          'field': 'node_id',
          'title': '节点ID',
          'autoHide': true
        }, {
          'field': 'node_name',
          'title': '节点名称',
          'autoHide': false
        }, {
          'field': 'rate',
          'title': '节点倍率',
          'autoHide': true
        }, {
          'field': 'traffic',
          'title': '消耗流量',
          'autoHide': false
        }, {
          'field': 'log_time',
          'title': '记录时间',
          'autoHide': false,
          'template': function (_0x130166) {
            return mt['getTimeForm'](_0x130166['log_time']);
          }
        }]
      });
      $('#ajax_traffic_log_data_reload')['on']('click ', function () {
        $('#ajax_traffic_log_data')['KTDatatable']('reload');
      });
    };
    var _0x6882c7 = function () {
      var _0x1fabb4 = $('#ajax_detect_log_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/ajax_data/table/detect_log',
              'map': function (_0xa4f247) {
                var _0x41549f = _0xa4f247;
                if (typeof _0xa4f247['data'] !== 'undefined') {
                  _0x41549f = _0xa4f247['data'];
                }
                return _0x41549f;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 0x5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': false,
        'pagination': true,
        'search': {
          'input': $('#generalSearch')
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [0x5, 0xa, 0x14, 0x1e, 0x32, 0x64]
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载...',
            'noRecords': '暂无记录, 请保持'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': '记录ID',
          'sortable': 'desc',
          'width': 0x50,
          'type': 'number',
          'selector': false,
          'textAlign': 'center'
        }, {
          'field': 'node_id',
          'title': '节点ID',
          'autoHide': true
        }, {
          'field': 'node_name',
          'title': '节点名称',
          'autoHide': false
        }, {
          'field': 'list_id',
          'title': '规则ID',
          'autoHide': true
        }, {
          'field': 'rule_name',
          'title': '规则名称',
          'autoHide': false
        }, {
          'field': 'rule_text',
          'title': '规则描述',
          'sortable': false
        }, {
          'field': 'rule_regex',
          'title': '正则表达式',
          'autoHide': true
        }, {
          'field': 'rule_type',
          'title': '规则类型',
          'autoHide': true
        }, {
          'field': 'datetime',
          'title': '记录时间',
          'autoHide': false,
          'template': function (_0x2b7505) {
            return mt['getTimeForm'](_0x2b7505['datetime']);
          }
        }]
      });
      var _0x2b8a40 = $('#ajax_detect_rule_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/ajax_data/table/detect_rule',
              'map': function (_0x19dd29) {
                var _0x2d5f1d = _0x19dd29;
                if (typeof _0x19dd29['data'] !== 'undefined') {
                  _0x2d5f1d = _0x19dd29['data'];
                }
                return _0x2d5f1d;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 0x5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'search': {
          'input': $('#generalSearch')
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [0x5, 0xa, 0x14, 0x1e, 0x32, 0x64]
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载...',
            'noRecords': '暂无规则'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': '规则ID',
          'sortable': 'desc',
          'width': 0x50,
          'type': 'number',
          'selector': false,
          'textAlign': 'center'
        }, {
          'field': 'name',
          'title': '规则名称',
          'autoHide': false
        }, {
          'field': 'text',
          'title': '规则描述',
          'autoHide': false
        }, {
          'field': 'regex',
          'title': '正则表达式',
          'autoHide': true
        }, {
          'field': 'type',
          'title': '规则类型',
          'autoHide': true
        }]
      });
    };
    var _0x3344f0 = function () {
      var _0x2e68e1 = $('#ajax_relay_rule_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/ajax_data/table/relay_rule',
              'map': function (_0x295db4) {
                var _0x477c74 = _0x295db4;
                if (typeof _0x295db4['data'] !== 'undefined') {
                  _0x477c74 = _0x295db4['data'];
                }
                return _0x477c74;
              }
            }
          },
          'saveState': true,
          'pageSize': 0x5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'theme': 'default',
          'scroll': false,
          'footer': false
        },
        'sortable': false,
        'pagination': true,
        'toolbar': {
          'items': {
            'info': false,
            'pagination': {
              'pageSizeSelect': [0x5, 0xa],
              'navigation': {
                'prev': true,
                'next': true,
                'first': true,
                'last': true
              }
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载...',
            'noRecords': '暂无记录'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': 'ID',
          'sortable': 'desc',
          'width': 0x46,
          'type': 'number',
          'selector': false,
          'textAlign': 'center'
        }, {
          'field': 'name',
          'title': '起源节点'
        }, {
          'field': 'dist_name',
          'title': '目标节点'
        }, {
          'field': 'port',
          'title': '端口'
        }, {
          'field': 'priority',
          'title': '优先级'
        }, {
          'field': 'caozuo',
          'title': '操作',
          'sortable': false,
          'autoHide': false,
          'template': function (_0x5df18c) {
            if (_0x5df18c['user_id'] === 0x0) {
              return '无权操作';
            } else {
              return '\t\t\t\t\t\t\t\t<div class="card-toolbar">\t\t\t\t\t\t\t\t\t<div class="dropdown dropdown-inline mr-2">\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary font-weight-bolder dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">操作</button>\t\t\t\t\t\t\t\t\t\t<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\t\t\t\t\t\t\t\t\t\t\t<ul class="navi flex-column navi-hover py-2">\t\t\t\t\t\t\t\t\t\t\t\t<li class="navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2">选择操作:</li>\t\t\t\t\t\t\t\t\t\t\t\t<li class="navi-item">\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="JavaScript:;" class="navi-link" onclick="setting.edit_relay(' + _0x5df18c['id'] + ', \'get\');"> <span class="navi-icon"> <i class="la la-edit"></i> </span> <span class="navi-text">编辑</span> </a>\t\t\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t\t\t<li class="navi-item">\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="JavaScript:;" class="navi-link" onclick="setting.del_relay(' + _0x5df18c['id'] + ');"> <span class="navi-icon"> <i class="la la-window-close"></i> </span> <span class="navi-text">删除</span> </a>\t\t\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t\t</ul>\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t</div>';
            }
          }
        }]
      });
    };
    var _0xdfe23c = function () {
      let _0x2dac98 = $('#ajax_relay_link_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/ajax_data/table/relay_link',
              'map': function (_0x3fae3d) {
                var _0x21cceb = _0x3fae3d;
                if (typeof _0x3fae3d['data'] !== 'undefined') {
                  _0x21cceb = _0x3fae3d['data'];
                }
                return _0x21cceb;
              }
            }
          },
          'pageSize': -0x1,
          'saveState': true,
          'serverPaging': false,
          'serverFiltering': false,
          'serverSorting': false
        },
        'layout': {
          'theme': 'default',
          'scroll': false,
          'footer': false
        },
        'sortable': false,
        'pagination': false,
        'toolbar': {
          'items': {
            'info': false,
            'pagination': {
              'pageSizeSelect': [0x5, 0xa],
              'navigation': {
                'prev': true,
                'next': true,
                'first': true,
                'last': true
              }
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载...',
            'noRecords': '暂无记录'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'port',
          'title': '端口',
          'width': 0x3c,
          'textAlign': 'center'
        }, {
          'field': 'begin_node',
          'title': '始发节点'
        }, {
          'field': 'end_node',
          'title': '终点节点'
        }, {
          'field': 'path',
          'title': '途径节点'
        }, {
          'field': 'status',
          'title': '状态',
          'template': function (_0x2fada0) {
            let _0x3fab3a = {
              '通畅': {
                'title': '通畅',
                'state': 'success'
              },
              '阻断': {
                'title': '阻断',
                'state': 'danger'
              }
            };
            return '<span class="label label-' + _0x3fab3a[_0x2fada0['status']]['state'] + ' label-dot mr-2"></span><span class="font-weight-bold text-' + _0x3fab3a[_0x2fada0['status']]['state'] + '">' + _0x3fab3a[_0x2fada0['status']]['title'] + '</span>';
          }
        }]
      });
    };
    var _0x3a5324 = function () {
      var _0xf77d6 = $('#ajax_invite_back_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/ajax_data/table/invite_back',
              'map': function (_0x1d5b6a) {
                var _0x4339e3 = _0x1d5b6a;
                if (typeof _0x1d5b6a['data'] !== 'undefined') {
                  _0x4339e3 = _0x1d5b6a['data'];
                }
                return _0x4339e3;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 0xb,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'search': {
          'input': $('#generalSearch')
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [0x5, 0xa, 0xf, 0x14, 0x1e, 0x32, 0x64]
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载...',
            'noRecords': '暂无记录'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '当前显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': 'ID',
          'sortable': 'desc',
          'width': 0x50,
          'type': 'number',
          'selector': false,
          'textAlign': 'center'
        }, {
          'field': 'userid',
          'title': '被邀ID',
          'width': 0x3c,
          'autoHide': false
        }, {
          'field': 'ref_get',
          'title': '获得返利',
          'width': 0x3c,
          'template': function (_0x52e5d8) {
            return _0x52e5d8['ref_get'] + '元';
          }
        }, {
          'field': 'datetime',
          'title': '时间',
          'width': 0x96,
          'template': function (_0x1f9511) {
            return mt['getTimeForm'](_0x1f9511['datetime']);
          }
        }]
      });
    };
    var _0x3b73e6 = function () {
      var _0x1dabad = $('#ajax_invite_user_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/ajax_data/table/invite_user',
              'map': function (_0x20f3e9) {
                var _0x33d2f9 = _0x20f3e9;
                if (typeof _0x20f3e9['data'] !== 'undefined') {
                  _0x33d2f9 = _0x20f3e9['data'];
                }
                return _0x33d2f9;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 0x5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'search': {
          'input': $('#generalSearch')
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [0x5, 0xa, 0xf, 0x14, 0x1e, 0x32, 0x64]
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载...',
            'noRecords': '暂无记录'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '当前显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': '用户ID',
          'sortable': 'desc',
          'width': 0x50,
          'type': 'number',
          'selector': false,
          'textAlign': 'center'
        }, {
          'field': 'user_name',
          'title': '用户昵称',
          'autoHide': false
        }, {
          'field': 'reg_date',
          'title': '注册日期'
        }, {
          'field': 'accumulated_recharge',
          'title': '累计消费',
          'sortable': false
        }, {
          'field': 'get_rebates',
          'title': '累计返利',
          'sortable': false
        }]
      });
      $('#invite_user_status')['on']('change', function () {
        _0x1dabad['search']($(this)['val']()['toLowerCase'](), 'invite_user_status');
      });
      $('#invite_user_status')['selectpicker']();
    };
    var _0x3c1f84 = function (_0x3e44f5) {
      switch (_0x3e44f5) {
        case 'init':
          var _0x271bf8 = FormValidation['formValidation'](KTUtil['getById']('profile_form'), {
            'fields': {
              'user_name': {
                'message': '表名称验证失败',
                'validators': {
                  'notEmpty': {
                    'message': '用户昵称为必填项'
                  },
                  'regexp': {
                    'regexp': /^[一-龥_a-zA-Z0-9]+$/,
                    'message': '用户名仅支中文、数字、字母和下划线的组合'
                  },
                  'stringLength': {
                    'max': 0x8,
                    'message': '不能超过 8 个字符'
                  }
                }
              }
            },
            'plugins': {
              'trigger': new FormValidation['plugins']['Trigger'](),
              'bootstrap': new FormValidation['plugins']['Bootstrap']()
            }
          });
          $('#profile_save_submit')['on']('click', function (_0x241bf9) {
            var _0x5b3ff3 = $('input[name=\'email\']')['val']() ? $('input[name=\'email\']')['val']() : $('input[name=\'email_name\']')['val']() + $('#email_suffix')['find']('option:selected')['text']();
            var _0xf5b988 = $('input[name=\'email\']')['attr']('oldvalue') ? $('input[name=\'email\']')['attr']('oldvalue') : $('input[name=\'email_name\']')['attr']('oldvalue') + $('#email_suffix')['attr']('oldvalue');
            var _0x3b042e = $('input[name=\'user_name\']')['val']();
            var _0xe68653 = $('input[name=\'user_name\']')['attr']('oldvalue');
            if (_0x3b042e == _0xe68653 && _0x5b3ff3 == _0xf5b988) {
              swal['fire']({
                'title': '您没有做任何更改',
                'icon': 'info',
                'confirmButtonText': '确定'
              });
              return;
            }
            _0x241bf9['preventDefault']();
            _0x271bf8['validate']()['then'](function (_0xd31464) {
              if (_0xd31464 == 'Valid') {
                $['ajax']({
                  'type': 'POST',
                  'url': '/user/setting/profile',
                  'dataType': 'json',
                  'data': {
                    'user_name': $('input[name=\'user_name\']')['val'](),
                    'email': $('input[name=\'email\']')['val']() ? $('input[name=\'email\']')['val']() : $('input[name=\'email_name\']')['val']() + $('#email_suffix')['find']('option:selected')['text'](),
                    'email_code': $('input[name=\'email_code\']')['val']()
                  },
                  'success': function (_0x3128a4) {
                    if (_0x3128a4.ret === 0x1) {
                      swal['fire']({
                        'title': _0x3128a4['msg'],
                        'icon': 'success',
                        'confirmButtonText': '确定'
                      })['then'](function () {
                        window['location']['reload']();
                      });
                    } else if (_0x3128a4.ret === 0x0) {
                      swal['fire']({
                        'title': _0x3128a4['msg'],
                        'icon': 'error',
                        'confirmButtonText': '确定'
                      });
                    } else {
                      window['location']['reload']();
                    }
                  },
                  'error': function (_0x1ee4a5) {
                    Swal['fire']({
                      'icon': 'error',
                      'title': '发生错误 ' + _0x1ee4a5['status'],
                      'confirmButtonText': '确定'
                    });
                  }
                });
              } else {
                swal['fire']({
                  'title': '请检查表单',
                  'icon': 'error',
                  'confirmButtonText': '确定'
                });
              }
            });
          });
          $('#sendDailyMail')['on']('click', function (_0x2370ee) {
            $['ajax']({
              'type': 'POST',
              'url': '/user/mail',
              'dataType': 'json',
              'data': {
                'mail': $('input[id="sendDailyMail"]:checked')['val']() ? 0x1 : 0x0
              },
              'success': function (_0x16f202) {
                if (_0x16f202.ret === 0x1) {
                  swal['fire']({
                    'title': _0x16f202['msg'],
                    'text': '每日邮件状态已更新',
                    'icon': 'success',
                    'confirmButtonText': '确定'
                  });
                } else if (_0x16f202.ret === 0x0) {
                  swal['fire']({
                    'title': _0x16f202['msg'],
                    'icon': 'error',
                    'confirmButtonText': '确定'
                  });
                } else {
                  window['location']['reload']();
                }
              },
              'error': function (_0x278c59) {
                Swal['fire']({
                  'icon': 'error',
                  'title': '发生错误 ' + _0x278c59['status'],
                  'confirmButtonText': '确定'
                });
              }
            });
          });
          break;
        case 'send_email_code':
          var _0x28fe5c = $('input[name=\'email\']')['val']() ? $('input[name=\'email\']')['val']() : $('input[name=\'email_name\']')['val']() + $('#email_suffix')['find']('option:selected')['text']();
          var _0x53616c = $('input[name=\'email\']')['attr']('oldvalue') ? $('input[name=\'email\']')['attr']('oldvalue') : $('input[name=\'email_name\']')['attr']('oldvalue') + $('#email_suffix')['attr']('oldvalue');
          if (_0x28fe5c == _0x53616c) {
            swal['fire']({
              'title': '无需验证码',
              'text': '没有修改邮箱无需验证码',
              'icon': 'info',
              'confirmButtonText': '确定'
            });
          } else {
            $['ajax']({
              'type': 'POST',
              'url': '/user/setting/send_email_code',
              'dataType': 'json',
              'data': {
                'email': _0x28fe5c
              },
              'success': function (_0x20a021) {
                if (_0x20a021.ret === 0x1) {
                  swal['fire']({
                    'title': _0x20a021['msg'],
                    'icon': 'success',
                    'confirmButtonText': '确定'
                  });
                  _0x1891b3($('#send_email_code'), 0x3c);
                } else if (_0x20a021.ret === 0x0) {
                  swal['fire']({
                    'title': _0x20a021['msg'],
                    'icon': 'error',
                    'confirmButtonText': '确定'
                  });
                } else {
                  window['location']['reload']();
                }
              },
              'error': function (_0x4c690c) {
                Swal['fire']({
                  'icon': 'error',
                  'title': '发生错误 ' + _0x4c690c['status'],
                  'confirmButtonText': '确定'
                });
              }
            });
          }
          break;
      }
    };
    var _0x3de2b3 = function () {
      var _0x19f80c = KTUtil['getById']('safe_form');
      var _0x1db95d = FormValidation['formValidation'](_0x19f80c, {
        'fields': {
          'old_passwd': {
            'validators': {
              'notEmpty': {
                'message': '旧密码不能为空'
              },
              'remote': {
                'url': '/user/formcheck/old_passwd',
                'message': '旧密码错误',
                'type': 'get',
                'data': function () {
                  return {
                    'id': MRCookie['getCookie']('uid')
                  };
                }
              }
            }
          },
          'new_passwd': {
            'validators': {
              'notEmpty': {
                'message': '新密码不能为空'
              },
              'stringLength': {
                'min': 0x8,
                'message': '新密码必须在8位以上'
              },
              'different': {
                'compare': function () {
                  return _0x19f80c['querySelector']('[name="old_passwd"]')['value'];
                },
                'message': '新密码不能与旧密码一致'
              }
            }
          },
          'ret_passwd': {
            'validators': {
              'identical': {
                'compare': function () {
                  return _0x19f80c['querySelector']('[name="new_passwd"]')['value'];
                },
                'message': '两次输入密码不一致'
              }
            }
          }
        },
        'plugins': {
          'trigger': new FormValidation['plugins']['Trigger'](),
          'bootstrap': new FormValidation['plugins']['Bootstrap'](),
          'submitButton': new FormValidation['plugins']['SubmitButton']()
        }
      });
      _0x19f80c['querySelector']('[name="new_passwd"]')['addEventListener']('input', function () {
        _0x1db95d['revalidateField']('ret_passwd');
      });
      $('#safe_save_submit')['on']('click', function (_0x5a0bde) {
        if (_0x19f80c['querySelector']('[name="old_passwd"]')['value'] == '') {
          swal['fire']({
            'text': '没有修改密码无需保存',
            'icon': 'info',
            'confirmButtonText': '确定'
          });
          return;
        }
        _0x5a0bde['preventDefault']();
        _0x1db95d['validate']()['then'](function (_0x4732c8) {
          if (_0x4732c8 == 'Valid') {
            $['ajax']({
              'type': 'POST',
              'url': '/user/setting/safe',
              'dataType': 'json',
              'data': {
                'old_passwd': _0x19f80c['querySelector']('[name="old_passwd"]')['value'],
                'new_passwd': _0x19f80c['querySelector']('[name="new_passwd"]')['value'],
                'ret_passwd': _0x19f80c['querySelector']('[name="ret_passwd"]')['value']
              },
              'success': function (_0x25fffa) {
                if (_0x25fffa.ret === 0x1) {
                  swal['fire']({
                    'title': _0x25fffa['msg'],
                    'icon': 'success',
                    'confirmButtonText': '确定'
                  })['then'](function () {
                    window['location']['reload']();
                  });
                } else if (_0x25fffa.ret === 0x0) {
                  swal['fire']({
                    'title': _0x25fffa['msg'],
                    'icon': 'error',
                    'confirmButtonText': '确定'
                  });
                } else {
                  window['location']['reload']();
                }
              },
              'error': function (_0xa2d14f) {
                Swal['fire']({
                  'icon': 'error',
                  'title': '发生错误 ' + _0xa2d14f['status'],
                  'confirmButtonText': '确定'
                });
              }
            });
          } else {
            swal['fire']({
              'text': '请检查表单',
              'icon': 'error',
              'confirmButtonText': '确定'
            })['then'](function () {
              KTUtil['scrollTop']();
            });
          }
        });
      });
      $('#step2-modal')['on']('show.bs.modal', function () {
        $['getScript'](ASSETS_URL + '/plugins/jQuery-qrcode/jquery.qrcode.min.js', function () {
          $('#ga-qr')['qrcode']({
            'text': $('#ga-qr')['attr']('safe-url')
          });
        });
      });
      $('#step2-modal')['on']('hide.bs.modal', function () {
        setTimeout(function () {
          $('#ga-qr')['empty']();
        }, 0x1f4);
      });
    };
    var _0xae988d = function (_0x484a35) {
      if (_0x484a35 == 'init') {
        var _0x58bb59 = KTUtil['getById']('sublink_form');
        var _0x6668f3 = FormValidation['formValidation'](_0x58bb59, {
          'fields': {
            'node_passwd': {
              'validators': {
                'regexp': {
                  'regexp': /^[a-zA-Z0-9]+$/,
                  'message': '连接密码仅允许数字、字母的组合'
                },
                'stringLength': {
                  'min': 0x6,
                  'message': '请设置 6 位以上连接密码'
                }
              }
            }
          },
          'plugins': {
            'trigger': new FormValidation['plugins']['Trigger'](),
            'bootstrap': new FormValidation['plugins']['Bootstrap'](),
            'submitButton': new FormValidation['plugins']['SubmitButton']()
          }
        });
        $('#sublink_save_submit')['on']('click', function (_0x394a8e) {
          var _0x58cea9 = $('input[name=\'node_passwd\']')['val']();
          if (_0x58cea9 == '') {
            swal['fire']({
              'title': '您没有做任何更改',
              'icon': 'info',
              'confirmButtonText': '确定'
            });
            return;
          }
          _0x394a8e['preventDefault']();
          _0x6668f3['validate']()['then'](function (_0x34bb52) {
            if (_0x34bb52 == 'Valid') {
              $['ajax']({
                'type': 'POST',
                'url': '/user/sspwd',
                'dataType': 'json',
                'data': {
                  'sspwd': _0x58cea9
                },
                'success': function (_0x2e504c) {
                  if (_0x2e504c.ret === 0x1) {
                    swal['fire']({
                      'title': '更新成功',
                      'icon': 'success',
                      'confirmButtonText': '确定'
                    })['then'](function () {
                      window['location']['reload']();
                    });
                  } else if (_0x2e504c.ret === 0x0) {
                    swal['fire']({
                      'title': _0x2e504c['msg'],
                      'icon': 'error',
                      'confirmButtonText': '确定'
                    });
                  } else {
                    window['location']['reload']();
                  }
                },
                'error': function (_0x593a0b) {
                  Swal['fire']({
                    'icon': 'error',
                    'title': '发生错误 ' + _0x593a0b['status'],
                    'confirmButtonText': '确定'
                  });
                }
              });
            } else {
              swal['fire']({
                'title': '请检查表单',
                'icon': 'error',
                'confirmButtonText': '确定'
              });
            }
          });
        });
      } else if (_0x484a35 == 'reset') {
        $['ajax']({
          'type': 'POST',
          'url': '/user/setting/sublink',
          'dataType': 'json',
          'data': {},
          'success': function (_0x5b5b01) {
            if (_0x5b5b01.ret === 0x1) {
              swal['fire']({
                'title': _0x5b5b01['msg'],
                'text': '请回到主页重新获取新的订阅链接',
                'icon': 'success',
                'confirmButtonText': '确定'
              })['then'](function () {
                window['location']['reload']();
              });
            } else if (_0x5b5b01.ret === 0x0) {
              swal['fire']({
                'title': _0x5b5b01['msg'],
                'icon': 'error',
                'confirmButtonText': '确定'
              });
            } else {
              window['location']['reload']();
            }
          },
          'error': function (_0xdf4b3f) {
            Swal['fire']({
              'icon': 'error',
              'title': '发生错误 ' + _0xdf4b3f['status'],
              'confirmButtonText': '确定'
            });
          }
        });
      }
    };
    var _0x4a39c3 = function () {
      KTApp['block']('#add-relay-modal', {
        'overlayColor': '#000000',
        'state': 'primary',
        'message': '请稍候...'
      });
      $['ajax']({
        'type': 'POST',
        'url': '/user/relay',
        'dataType': 'json',
        'data': {
          'source_node': $('#source_node')['val'](),
          'dist_node': $('#dist_node')['val'](),
          'port': $('#port')['val'](),
          'priority': $('input[name=\'priority\']')['val']()
        },
        'success': function (_0x56790e) {
          mt['ajax_swal'](_0x56790e);
          KTApp['unblock']('#add-relay-modal');
        },
        'error': function (_0x9eabf8) {
          Swal['fire']({
            'icon': 'error',
            'title': '出现错误',
            'html': '请刷新页面后重试',
            'confirmButtonText': '确定',
            'confirmButtonClass': 'btn btn-primary'
          })['then'](_0x27607f => {
            window['location']['reload']();
          });
          KTApp['unblock']('#add-relay-modal');
        }
      });
    };
    var _0x23bad4 = function (_0x50a03b) {
      KTApp['block']('#relay-card', {
        'overlayColor': '#000000',
        'state': 'primary',
        'message': '请稍候...'
      });
      $['ajax']({
        'type': 'DELETE',
        'url': '/user/relay',
        'dataType': 'json',
        'data': {
          'id': _0x50a03b
        },
        'success': function (_0x12d00a) {
          mt['ajax_swal'](_0x12d00a);
          KTApp['unblock']('#relay-card');
        },
        'error': function (_0x391e90) {
          Swal['fire']({
            'icon': 'error',
            'title': '出现错误',
            'html': '请刷新页面后重试',
            'confirmButtonText': '确定',
            'confirmButtonClass': 'btn btn-primary'
          })['then'](_0x22e13a => {
            window['location']['reload']();
          });
        }
      });
    };
    var _0x12a79c = function (_0x8452de, _0x4dac04) {
      if (_0x4dac04 === 'get') {
        KTApp['block']('#relay-card', {
          'overlayColor': '#000000',
          'state': 'primary',
          'message': '请稍候...'
        });
        $['ajax']({
          'type': 'GET',
          'url': '/user/relay/' + _0x8452de + '/edit',
          'dataType': 'json',
          'data': {
            'json': 0x1
          },
          'success': function (_0x512bc0) {
            $('#edit-relay-modal .modal-title strong')['text']('编辑中转规则 #' + _0x512bc0['rule']['id']);
            $('#edit-relay-modal #edit_source_node')['find']('option[value=\'' + _0x512bc0['rule']['source_node_id'] + '\']')['attr']('selected', true);
            $('#edit-relay-modal #edit_dist_node')['find']('option[value=\'' + _0x512bc0['rule']['dist_node_id'] + '\']')['attr']('selected', true);
            $('#edit-relay-modal #edit_port')['find']('option[value=\'' + _0x512bc0['rule']['port'] + '\']')['attr']('selected', true);
            $('#edit-relay-modal input[name=\'edit_priority\']')['val'](_0x512bc0['rule']['priority']);
            $('#edit-relay-modal #edit_relay')['attr']('onclick', 'setting.edit_relay(' + _0x512bc0['rule']['id'] + ', \'set\');');
            $('#edit_source_node')['selectpicker']();
            $('#edit_dist_node')['selectpicker']();
            $('#edit_port')['selectpicker']();
            $('#edit-relay-modal')['modal']();
            KTApp['unblock']('#relay-card');
          },
          'error': function (_0x2d4606) {
            Swal['fire']({
              'icon': 'error',
              'title': '出现错误',
              'html': '请刷新页面后重试',
              'confirmButtonText': '确定',
              'confirmButtonClass': 'btn btn-primary'
            })['then'](_0x1122c2 => {
              window['location']['reload']();
            });
          }
        });
      } else if (_0x4dac04 === 'set') {
        KTApp['block']('#edit-relay-modal', {
          'overlayColor': '#000000',
          'state': 'primary',
          'message': '请稍候...'
        });
        $['ajax']({
          'type': 'PUT',
          'url': '/user/relay/' + _0x8452de,
          'dataType': 'json',
          'data': {
            'source_node': $('#edit_source_node')['val'](),
            'dist_node': $('#edit_dist_node')['val'](),
            'port': $('#edit_port')['val'](),
            'priority': $('input[name=\'edit_priority\']')['val']()
          },
          'success': function (_0x44c7a0) {
            mt['ajax_swal'](_0x44c7a0);
            KTApp['unblock']('#edit-relay-modal');
          },
          'error': function (_0x2febf6) {
            Swal['fire']({
              'icon': 'error',
              'title': '出现错误',
              'html': '请刷新页面后重试',
              'confirmButtonText': '确定',
              'confirmButtonClass': 'btn btn-primary'
            })['then'](_0x24b65e => {
              window['location']['reload']();
            });
          }
        });
      }
    };
    var _0x171c51 = function (_0x116e2c) {
      switch (_0x116e2c) {
        case 'reset':
          Swal['fire']({
            'icon': 'info',
            'title': '请注意！',
            'html': '重置邀请链接后，原邀请码和邀请链接将失效，并随机生成新的邀请码和邀请链接',
            'showCancelButton': true,
            'confirmButtonText': '确定',
            'cancelButtonText': '取消'
          })['then'](_0x361323 => {
            if (_0x361323['value']) {
              Swal['fire']({
                'icon': 'success',
                'title': '重置成功',
                'showConfirmButton': false
              });
              window['setTimeout']('location.href=\'/user/inviteurl_reset\'', 0x5dc);
            }
          });
          break;
        case 'buynum':
          $['ajax']({
            'type': 'POST',
            'url': '/user/buy_invite',
            'dataType': 'json',
            'data': {
              'num': $('#buy-invite-num')['val']()
            },
            'success': function (_0xf9b82b) {
              mt['ajax_swal'](_0xf9b82b);
            },
            'error': function (_0x4306d5) {
              Swal['fire']({
                'icon': 'error',
                'title': data['msg'],
                'html': '出现了一些错误'
              });
            }
          });
          break;
        case 'custom':
          $['ajax']({
            'type': 'POST',
            'url': '/user/custom_invite',
            'dataType': 'json',
            'data': {
              'customcode': $('#custom-invite-link')['val']()
            },
            'success': _0x552a47 => {
              mt['ajax_swal'](_0x552a47);
            },
            'error': _0x39f4fe => {
              Swal['fire']({
                'icon': 'error',
                'title': data['msg'],
                'html': '出现了一些错误'
              });
            }
          });
          break;
      }
    };
    var _0x425d89 = function () {
      mt['copytext']('modal');
    };
    var _0x5654c5 = function () {
      KTApp['block']('#take_money_modal', {
        'overlayColor': '#000000',
        'state': 'primary',
        'message': '请稍候...'
      });
      $['ajax']({
        'type': 'POST',
        'url': '/user/agent/take_total',
        'dataType': 'json',
        'data': {
          'type': $('#take_money_modal li .active')['attr']('data-metron'),
          'total': $(' input[ name=\'take_money\' ] ')['val']()
        },
        'success': function (_0x46ae90) {
          mt['ajax_swal'](_0x46ae90);
          KTApp['unblock']('#take_money_modal');
        },
        'error': function (_0x4e6a29) {
          Swal['fire']({
            'icon': 'error',
            'title': '出现错误',
            'html': '请刷新页面后重试',
            'confirmButtonText': '确定',
            'confirmButtonClass': 'btn btn-primary'
          })['then'](_0x1d7077 => {
            window['location']['reload']();
          });
          KTApp['unblock']('#take_money_modal');
        }
      });
    };
    var _0x8d9d56 = function () {
      KTApp['block']('#agent_setting_modal', {
        'overlayColor': '#000000',
        'state': 'primary',
        'message': '请稍候...'
      });
      $['ajax']({
        'type': 'POST',
        'url': '/user/agent/take_account_setting',
        'dataType': 'json',
        'data': {
          'type': $('#take_account_type')['val'](),
          'acc': $(' input[ name=\'take_account_value\' ] ')['val']()
        },
        'success': function (_0x2e6e15) {
          mt['ajax_swal'](_0x2e6e15);
          KTApp['unblock']('#agent_setting_modal');
        },
        'error': function (_0xe61123) {
          Swal['fire']({
            'icon': 'error',
            'title': '出现错误',
            'html': '请刷新页面后重试',
            'confirmButtonText': '确定',
            'confirmButtonClass': 'btn btn-primary'
          })['then'](_0x4ff098 => {
            window['location']['reload']();
          });
          KTApp['unblock']('#agent_setting_modal');
        }
      });
    };
    var _0x1891b3 = function (_0x293fb4, _0x37ac8f = 0x0) {
      if (_0x37ac8f == 0x0) {
        _0x293fb4['text']('获取验证码')['attr']('disabled', false);
      } else {
        _0x293fb4['text']('重新发送(' + _0x37ac8f + ')')['attr']('disabled', true);
        setTimeout(function () {
          _0x1891b3(_0x293fb4, --_0x37ac8f);
        }, 0x3e8);
      }
    };
    return {
      'init': function (_0x31cabe) {
        _0x4e3e3c();
      },
      'profile': function (_0x212068) {
        _0x3c1f84(_0x212068);
      },
      'safe': function (_0x4b544a, _0x3b8209) {
        switch (_0x4b544a) {
          case 'step2':
            if (_0x3b8209) {
              if ($('#ga-code')['val']() == '') {
                Swal['fire']({
                  'icon': 'error',
                  'title': '请输入动态码',
                  'timer': 0x5dc,
                  'allowOutsideClick': true,
                  'showConfirmButton': false
                });
                return;
              }
              $['ajax']({
                'type': 'POST',
                'url': '/user/gacheck',
                'dataType': 'json',
                'data': {
                  'code': $('#ga-code')['val']()
                },
                'success': _0x5c7b51 => {
                  if (_0x5c7b51.ret === 0x1) {
                    swal['fire']({
                      'title': _0x5c7b51['msg'],
                      'icon': 'success',
                      'confirmButtonText': '确定'
                    })['then'](function () {
                      window['location']['reload']();
                    });
                  } else if (_0x5c7b51.ret === 0x0) {
                    swal['fire']({
                      'title': _0x5c7b51['msg'],
                      'icon': 'error',
                      'confirmButtonText': '确定'
                    });
                  } else {
                    window['location']['reload']();
                  }
                },
                'error': _0x4d5bc2 => {
                  Swal['fire']({
                    'icon': 'error',
                    'title': '发生错误 ' + _0x4d5bc2['status'],
                    'confirmButtonText': '确定'
                  });
                }
              });
            } else {
              if ($('#ga-passwd')['val']() == '') {
                Swal['fire']({
                  'icon': 'error',
                  'title': '请输入密码',
                  'timer': 0x5dc,
                  'allowOutsideClick': true,
                  'showConfirmButton': false
                });
                return 0x0;
              }
              $['ajax']({
                'type': 'POST',
                'url': '/user/gaset',
                'dataType': 'json',
                'data': {
                  'enable': 0x0,
                  'passwd': $('#ga-passwd')['val']()
                },
                'success': _0x3cc7d7 => {
                  if (_0x3cc7d7.ret === 0x1) {
                    swal['fire']({
                      'title': _0x3cc7d7['msg'],
                      'icon': 'success',
                      'confirmButtonText': '确定'
                    })['then'](function () {
                      window['location']['reload']();
                    });
                  } else if (_0x3cc7d7.ret === 0x0) {
                    swal['fire']({
                      'title': _0x3cc7d7['msg'],
                      'icon': 'error',
                      'confirmButtonText': '确定'
                    });
                  } else {
                    window['location']['reload']();
                  }
                },
                'error': _0x2b54a7 => {
                  Swal['fire']({
                    'icon': 'error',
                    'title': '发生错误 ' + _0x2b54a7['status'],
                    'confirmButtonText': '确定'
                  });
                }
              });
            }
            break;
          case 'kill':
            if ($('#delete_passwd')['val']() == '') {
              Swal['fire']({
                'icon': 'error',
                'title': '请输入密码',
                'timer': 0x5dc,
                'allowOutsideClick': true,
                'showConfirmButton': false
              });
              return 0x0;
            }
            $['ajax']({
              'type': 'POST',
              'url': '/user/kill',
              'dataType': 'json',
              'data': {
                'passwd': $('#delete_passwd')['val']()
              },
              'success': function (_0x571e5c) {
                if (_0x571e5c.ret === 0x1) {
                  swal['fire']({
                    'title': _0x571e5c['msg'],
                    'icon': 'success',
                    'confirmButtonText': '确定'
                  })['then'](function () {
                    window['location']['reload']();
                  });
                } else if (_0x571e5c.ret === 0x0) {
                  swal['fire']({
                    'title': _0x571e5c['msg'],
                    'icon': 'error',
                    'confirmButtonText': '确定'
                  });
                } else {
                  window['location']['reload']();
                }
              },
              'error': function (_0x9d9140) {
                Swal['fire']({
                  'icon': 'error',
                  'title': '发生错误 ' + _0x9d9140['status'],
                  'confirmButtonText': '确定'
                });
              }
            });
            break;
        }
      },
      'sublink': function () {
        _0xae988d('reset');
      },
      'invite': function (_0x58f664) {
        _0x171c51(_0x58f664);
      },
      'add_relay': function () {
        _0x4a39c3();
      },
      'del_relay': function (_0x45d811) {
        _0x23bad4(_0x45d811);
      },
      'edit_relay': function (_0x214093, _0xfa51bc) {
        _0x12a79c(_0x214093, _0xfa51bc);
      },
      'telegram': function (_0x2fd4bd) {
        if (_0x2fd4bd == 'unbind') {
          $['ajax']({
            'type': 'POST',
            'url': '/user/setting/telegram',
            'dataType': 'json',
            'data': {
              'type': 'unbind'
            },
            'success': function (_0x19b8cc) {
              if (_0x19b8cc.ret === 0x1) {
                swal['fire']({
                  'title': _0x19b8cc['msg'],
                  'icon': 'success',
                  'confirmButtonText': '确定'
                })['then'](function () {
                  window['location']['reload']();
                });
              } else if (_0x19b8cc.ret === 0x0) {
                swal['fire']({
                  'title': _0x19b8cc['msg'],
                  'icon': 'error',
                  'confirmButtonText': '确定'
                });
              } else {
                window['location']['reload']();
              }
            },
            'error': function (_0x4bbbcc) {
              Swal['fire']({
                'icon': 'error',
                'title': '发生错误 ' + _0x4bbbcc['status'],
                'confirmButtonText': '确定'
              });
            }
          });
        }
      },
      'take_total': function () {
        _0x5654c5();
      },
      'take_account_setting': function () {
        _0x8d9d56();
      }
    };
  }();
  jQuery(document)['ready'](function () {
    setting['init']();
  });
}
if (urlPath['indexOf']('/ticket') >= 0x0) {
  var ticket = function () {
    var _0x579641 = function () {
      _0x10f788();
      var _0x283c30 = KTUtil['getById']('ticket-create-modal');
      if (urlPath['indexOf']('/view') > -0x1) {
        _0x36d358();
        var _0x283c30 = KTUtil['getById']('ticket_reply');
      }
      _0xc191e3(_0x283c30, 'ticket_reply_editor');
    };
    var _0x14a698;
    var _0x3e365f = function () {
      var _0x323cd7 = $('#ticket-create-title-text')['val']();
      if (_0x323cd7 == '' || _0x14a698 == '<p><br></p>') {
        return mt['swal']('标题和内容不能为空', 'error');
      }
      KTApp['block']('#ticket-create-modal .modal-content', {
        'overlayColor': '#000000',
        'state': 'primary',
        'message': '请稍候...'
      });
      $['ajax']({
        'type': 'POST',
        'url': '/user/ticket',
        'dataType': 'json',
        'data': {
          'content': _0x14a698,
          'title': _0x323cd7
        },
        'success': function (_0x5ad242) {
          KTApp['unblock']('#ticket-create-modal .modal-content');
          mt['ajax_swal'](_0x5ad242, '/user/ticket/' + _0x5ad242['tid'] + '/view');
        },
        'error': function (_0x3e8092) {
          KTApp['unblock']('#ticket-create-modal .modal-content');
          Swal['fire']({
            'icon': 'error',
            'title': _0x3e8092['msg'],
            'timer': 0x5dc,
            'showConfirmButton': false
          });
        }
      });
    };
    var _0x4c1bc8 = function (_0x149cac, _0x3422a0) {
      KTApp['blockPage']({
        'overlayColor': '#000000',
        'type': 'v2',
        'state': 'primary',
        'message': '请稍候...'
      });
      $['ajax']({
        'type': 'PUT',
        'url': '/user/ticket/' + _0x149cac,
        'dataType': 'json',
        'data': {
          'content': '这条工单已被关闭',
          'status': _0x3422a0
        },
        'success': function (_0x38d5f3) {
          KTApp['unblockPage']();
          if (_0x38d5f3.ret) {
            Swal['fire']({
              'icon': 'success',
              'title': _0x38d5f3['msg'],
              'timer': 0x5dc,
              'showConfirmButton': false
            });
          } else {
            Swal['fire']({
              'icon': 'error',
              'title': _0x38d5f3['msg'],
              'timer': 0x5dc,
              'showConfirmButton': false
            });
          }
          $('#ajax_ticket_data')['KTDatatable']('reload');
        },
        'error': function (_0x271d56) {
          KTApp['unblockPage']();
          Swal['fire']({
            'icon': 'error',
            'title': '出现错误',
            'html': '请刷新页面后重试',
            'timer': 0x5dc,
            'showConfirmButton': false
          })['then'](_0x57a915 => {
            window['location']['reload']();
          });
        }
      });
    };
    var _0x5be8a8 = function () {
      if (_0x14a698 == '<p><br></p>') {
        return mt['swal']('内容不能为空', 'error');
      }
      KTApp['block']('#ticket_reply', {
        'overlayColor': '#000000',
        'state': 'primary',
        'message': '请稍候...'
      });
      var _0x1c3f3a = 0x1;
      $['ajax']({
        'type': 'PUT',
        'url': '/user/ticket/' + $('#ticket_view')['attr']('data-ticketid'),
        'dataType': 'json',
        'data': {
          'content': _0x14a698,
          'status': _0x1c3f3a
        },
        'success': function (_0x434ab0) {
          mt['ajax_swal'](_0x434ab0);
          KTApp['unblock']('#ticket_reply');
        },
        'error': function (_0x3d1d33) {
          Swal['fire']({
            'icon': 'error',
            'title': '出现错误',
            'html': '请刷新页面后重试',
            'timer': 0x5dc,
            'showConfirmButton': false
          })['then'](_0x2180f3 => {
            window['location']['reload']();
          });
          KTApp['unblock']('#ticket_reply');
        }
      });
    };
    var _0x10f788 = function () {
      var _0x3ecbba = $('#ajax_ticket_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/ajax_data/table/ticket',
              'map': function (_0x28de53) {
                var _0x1ab12b = _0x28de53;
                if (typeof _0x28de53['data'] !== 'undefined') {
                  _0x1ab12b = _0x28de53['data'];
                }
                return _0x1ab12b;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 0xa,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'theme': 'default',
          'scroll': false,
          'footer': false
        },
        'sortable': false,
        'pagination': true,
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [0x5, 0xa, 0x14, 0x1e, 0x32, 0x64]
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载...',
            'noRecords': '暂无工单'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '当前显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': 'ID',
          'sortable': 'desc',
          'type': 'number',
          'width': 0x3c,
          'selector': false,
          'textAlign': 'center'
        }, {
          'field': 'title',
          'title': '标题',
          'autoHide': false
        }, {
          'field': 'datetime',
          'title': '创建时间',
          'template': function (_0x168a9e) {
            return mt['getTimeForm'](_0x168a9e['datetime']);
          }
        }, {
          'field': 'replyuser',
          'title': '最后回复',
          'template': function (_0x555aa5) {
            return '<div class="d-flex align-items-center" data-toggle="view"> <span class="symbol symbol-35 mr-3"> <span class="symbol-label" style="background-image: url(' + _0x555aa5['user_pic'] + ')"></span> </span> <a href="#" class="font-weight-bold text-dark-50 text-hover-primary"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">' + _0x555aa5['user_name'] + '</font></font></a> </div>';
          }
        }, {
          'field': 'status',
          'title': '工单状态',
          'template': function (_0x32f803) {
            var _0x10b25a = {
              1: {
                'title': '处理中',
                'class': ' label-light-primary'
              },
              0: {
                'title': '已完成',
                'class': ' label-light-success'
              }
            };
            return '<span class="label font-weight-bold label-lg ' + _0x10b25a[_0x32f803['status']]['class'] + ' label-inline">' + _0x10b25a[_0x32f803['status']]['title'] + '</span>';
          }
        }, {
          'field': 'caozuo',
          'title': '操作',
          'sortable': false,
          'autoHide': false,
          'template': function (_0x9d2960) {
            var _0x1355f9 = {
              0: {
                'title': '购买失败',
                'state': 'warning'
              },
              1: {
                'title': '钱包充值',
                'state': 'primary'
              },
              2: {
                'title': '购买成功',
                'state': 'success'
              },
              3: {
                'title': '等待支付',
                'state': 'danger'
              }
            };
            return '<div class="card-toolbar"> <div class="dropdown dropdown-inline mr-2"> <button type="button" class="btn btn-primary font-weight-bolder dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">操作</button> <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right"> <ul class="navi flex-column navi-hover py-2"> <li class="navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2">选择操作:</li> <li class="navi-item"> <a href="/user/ticket/' + _0x9d2960['id'] + '/view" class="navi-link"> <span class="navi-icon"> <i class="la la-edit"></i> </span> <span class="navi-text">回复工单</span> </a> </li>' + (_0x9d2960['status'] === 0x1 ? '<li class="navi-item"> <a href="#" class="navi-link"> <span class="navi-icon"> <i class="la la-window-close"></i> </span> <span class="navi-text" onclick="ticket.off(' + _0x9d2960['id'] + ', 0);">关闭工单</span> </a> </li>' : '') + '</ul> </div> </div> </div>';
          }
        }]
      });
      $('#ticket_status')['on']('change', function () {
        _0x3ecbba['search']($(this)['val']()['toLowerCase'](), 'status');
      });
      $('#ticket_status')['selectpicker']();
    };
    var _0x36d358 = function () {
      var _0x31389f = KTUtil['getById']('ticket_view');
      KTUtil['on'](_0x31389f, '[data-inbox="back"]', 'click', function () {
        var _0x41447f = new KTDialog({
          'type': 'loader',
          'placement': 'top center',
          'message': '请稍候 ...'
        });
        _0x41447f['show']();
      });
      KTUtil['on'](_0x31389f, '[data-inbox="message"]', 'click', function (_0x326778) {
        var _0x178052 = this['closest']('[data-inbox="message"]');
        var _0x260bf0 = KTUtil['find'](this, '[data-toggle="dropdown"]');
        var _0x25d639 = KTUtil['find'](this, '[data-inbox="toolbar"]');
        if (_0x326778['target'] === _0x260bf0 || _0x260bf0 && _0x260bf0['contains'](_0x326778['target']) === true) {
          return false;
        }
        if (_0x326778['target'] === _0x25d639 || _0x25d639 && _0x25d639['contains'](_0x326778['target']) === true) {
          return false;
        }
        if (KTUtil['hasClass'](_0x178052, 'toggle-on')) {
          KTUtil['addClass'](_0x178052, 'toggle-off');
          KTUtil['removeClass'](_0x178052, 'toggle-on');
        } else {
          KTUtil['removeClass'](_0x178052, 'toggle-off');
          KTUtil['addClass'](_0x178052, 'toggle-on');
        }
      });
    };
    var _0xc191e3 = function (_0x3e329d, _0xdd2083) {
      var _0x548c9f = {
        'modules': {
          'toolbar': [[{
            'header': [0x1, 0x2, 0x3]
          }], ['bold', 'italic', 'underline']]
        },
        'placeholder': '请输入内容...',
        'theme': 'snow'
      };
      var _0x582c78 = new Quill('#' + _0xdd2083, _0x548c9f);
      var _0x975d28 = KTUtil['find'](_0x3e329d, '.ql-toolbar');
      var _0x5b4a70 = KTUtil['find'](_0x3e329d, '.ql-editor');
      if (_0x975d28) {
        KTUtil['addClass'](_0x975d28, 'px-5 border-top-0 border-left-0 border-right-0');
      }
      if (_0x5b4a70) {
        KTUtil['addClass'](_0x5b4a70, 'px-8');
      }
      _0x14a698 = _0x5b4a70['innerHTML'];
      _0x582c78['on']('text-change', function (_0x5a05e1, _0x234fe5, _0x4f4fb0) {
        if (_0x4f4fb0 == 'api') {} else if (_0x4f4fb0 == 'user') {
          _0x14a698 = _0x5b4a70['innerHTML'];
        }
      });
    };
    var _0x197d2d = function (_0x3d0115) {
      var _0x49b9f5 = '#' + _0x3d0115;
      var _0x181b7a = $(_0x49b9f5 + ' .dropzone-item');
      _0x181b7a['id'] = '';
      var _0x5cdd6e = _0x181b7a['parent']('.dropzone-items')['html']();
      _0x181b7a['remove']();
      var _0x533a41 = new Dropzone(_0x49b9f5, {
        'url': '/user/ticket' + $('#ticket_view')['attr']('data-ticketid'),
        'method': 'put',
        'parallelUploads': 0x14,
        'maxFilesize': 0x2,
        'maxFiles': 0x3,
        'dictInvalidInputType': '不支持的文件类型',
        'dictFileTooBig': '文件大小不允许超过2MB',
        'dictMaxFilesExceeded': '附件数量超过最大限制',
        'previewTemplate': _0x5cdd6e,
        'previewsContainer': _0x49b9f5 + ' .dropzone-items',
        'clickable': _0x49b9f5 + '_select'
      });
      _0x533a41['on']('addedfile', function (_0x4f1a7a) {
        $(document)['find'](_0x49b9f5 + ' .dropzone-item')['css']('display', '');
      });
      _0x533a41['on']('removedfile', function (_0x3f8352) {
        $(document)['find'](_0x49b9f5 + ' .dropzone-item')['css']('display', '');
      });
      _0x533a41['on']('sending', function (_0x4f40e2) {
        document['querySelector'](_0x49b9f5 + ' .progress-bar')['style']['opacity'] = '1';
      });
      _0x533a41['on']('complete', function (_0x1ab9e4) {
        var _0x12af78 = _0x49b9f5 + ' .dz-complete';
        setTimeout(function () {
          $(_0x12af78 + ' .progress-bar, ' + _0x12af78 + ' .progress')['css']('opacity', '0');
        }, 0x12c);
      });
    };
    return {
      'init': function () {
        _0x579641();
      },
      'create': function () {
        _0x3e365f();
      },
      'off': function (_0x124811, _0xa09771) {
        _0x4c1bc8(_0x124811, _0xa09771);
      },
      'reply': function () {
        _0x5be8a8();
      }
    };
  }();
  jQuery(document)['ready'](function () {
    ticket['init']();
  });
}
if (urlPath['indexOf']('/help') >= 0x0) {
  var help = function () {
    var _0x36cb3f = function () {
      var _0x2c621a = true;
      return function (_0x30cb6a, _0x13dee6) {
        var _0xab7a30 = _0x2c621a ? function () {
          if (_0x13dee6) {
            var _0x17356e = _0x13dee6['apply'](_0x30cb6a, arguments);
            _0x13dee6 = null;
            return _0x17356e;
          }
        } : function () {};
        _0x2c621a = false;
        return _0xab7a30;
      };
    }();
    var _0x49a942 = _0x36cb3f(this, function () {
      var _0x19124a = function () {
          return 'dev';
        },
        _0x404bd7 = function () {
          return 'window';
        };
      var _0x44ad0f = function () {
        var _0x5cce42 = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|"].+[\'|"];? *}');
        return !_0x5cce42['test'](_0x19124a['toString']());
      };
      var _0x538128 = function () {
        var _0x3569d2 = new RegExp('(\\\\[x|u](\\w){2,4})+');
        return _0x3569d2['test'](_0x404bd7['toString']());
      };
      var _0x4e4d75 = function (_0x68fd9a) {
        var _0x44088f = 0;
        if (_0x68fd9a['indexOf']('i' === _0x44088f)) {
          _0x38c555(_0x68fd9a);
        }
      };
      var _0x38c555 = function (_0x29665b) {
        var _0x52f2a0 = 3;
        if (_0x29665b['indexOf']('e') !== _0x52f2a0) {
          _0x4e4d75(_0x29665b);
        }
      };
      if (!_0x44ad0f()) {
        if (!_0x538128()) {
          _0x4e4d75('indеxOf');
        } else {
          _0x4e4d75('indexOf');
        }
      } else {
        _0x4e4d75('indеxOf');
      }
    });
    _0x49a942();
    var _0x548204 = function () {
      $('#search')['addClass']('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light');
    };
    return {
      'search': function () {
        _0x548204();
      }
    };
  }();
}
if (urlPath['indexOf']('/shared_account') >= 0x0) {
  var shared_account = function () {
    var _0x8010fb = function () {
      var _0x3ad913 = true;
      return function (_0x7bc03, _0x3fa25e) {
        var _0x1d97bd = _0x3ad913 ? function () {
          if (_0x3fa25e) {
            var _0x6b8fbe = _0x3fa25e['apply'](_0x7bc03, arguments);
            _0x3fa25e = null;
            return _0x6b8fbe;
          }
        } : function () {};
        _0x3ad913 = false;
        return _0x1d97bd;
      };
    }();
    var _0x48a0a9 = _0x8010fb(this, function () {
      var _0x572e2d = function () {};
      var _0x41a29d = function () {
        var _0x212d99;
        try {
          _0x212d99 = function () {
            return function () {}.constructor("return this")();
          }();
        } catch (_0x553366) {
          _0x212d99 = window;
        }
        return _0x212d99;
      };
      var _0x6ae5a9 = _0x41a29d();
      if (!_0x6ae5a9['console']) {
        _0x6ae5a9['console'] = function (_0x1f9454) {
          var _0x35828c = {};
          _0x35828c['log'] = _0x1f9454;
          _0x35828c['warn'] = _0x1f9454;
          _0x35828c['debug'] = _0x1f9454;
          _0x35828c['info'] = _0x1f9454;
          _0x35828c['error'] = _0x1f9454;
          _0x35828c['exception'] = _0x1f9454;
          _0x35828c['trace'] = _0x1f9454;
          return _0x35828c;
        }(_0x572e2d);
      } else {
        _0x6ae5a9['console']['log'] = _0x572e2d;
        _0x6ae5a9['console']['warn'] = _0x572e2d;
        _0x6ae5a9['console']['debug'] = _0x572e2d;
        _0x6ae5a9['console']['info'] = _0x572e2d;
        _0x6ae5a9['console']['error'] = _0x572e2d;
        _0x6ae5a9['console']['exception'] = _0x572e2d;
        _0x6ae5a9['console']['trace'] = _0x572e2d;
      }
    });
    _0x48a0a9();
    return {
      'check': function (_0x4620ef, _0x39412d) {
        swal['fire']({
          'title': '正在测试',
          'onOpen': function () {
            swal['showLoading']();
          }
        });
        $['ajax']({
          'type': 'post',
          'url': '/user/account_check',
          'dataType': 'json',
          'data': {
            'type': _0x4620ef,
            'key': _0x39412d
          },
          'success': function (_0x585d67) {
            if (_0x585d67.ret) {
              Swal['fire']({
                'icon': 'success',
                'title': _0x585d67['msg']
              });
            } else {
              Swal['fire']({
                'icon': 'error',
                'title': _0x585d67['msg'],
                'timer': 0x9c4,
                'showConfirmButton': false
              });
            }
          },
          'error': function (_0x3cdd12) {
            Swal['fire']({
              'icon': 'error',
              'title': '发生错误：' + _0x3cdd12['status']
            });
          }
        });
      }
    };
  }();
  jQuery(document)['ready'](function () {
    mt['copytext']();
  });
}
if (urlPath['indexOf']('/user/agent') > -0x1) {
  var agent = function () {
    var _0x5136a5 = function () {
      if (urlPath['indexOf']('/user/agent/') < 0x0) {
        _0x5cf5e();
        _0x269b25();
        _0x55cc5f();
        $('#agent_setting_modal')['on']('show.bs.modal', function () {
          $('#take_account_type')['selectpicker']();
        });
      }
      if (urlPath['indexOf']('/user/agent/adduser') > -0x1) {
        $('#add_user_shop')['selectpicker']();
      }
      if (urlPath['indexOf']('/user/agent/view/') > -0x1) {
        mt['copytext']();
        $('#edit_user_shop')['selectpicker']();
      }
    };
    var _0x269b25 = function () {
      var _0x69415c = $('#ajax_agent_user_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/agent_data/table/agent_user',
              'map': function (_0x39d664) {
                var _0x295412 = _0x39d664;
                if (typeof _0x39d664['data'] !== 'undefined') {
                  _0x295412 = _0x39d664['data'];
                }
                return _0x295412;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 0xa,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'search': {
          'onEnter': false,
          'delay': 0x3e8,
          'input': $('#agent_user_search_query')
        },
        'toolbar': {
          'placement': ['top', 'bottom'],
          'items': {
            'pagination': {
              'pageSizeSelect': [0x5, 0xa, 0xf, 0x14, 0x1e, 0x32, 0x64]
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载...',
            'noRecords': '暂无记录'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '当前显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'caozuo',
          'title': '操作',
          'width': 0x41,
          'template': function (_0x42f32d) {
            return '<div class="card-toolbar"> <div class="dropdown dropdown-inline"> <button type="button" class="btn btn-primary btn-sm font-weight-bolder dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">操作</button> <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right"> <ul class="navi flex-column navi-hover py-2"> <li class="navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2">选择操作:</li> <li class="navi-item"> <a href="/user/agent/view/' + _0x42f32d['id'] + '" class="navi-link"> <span class="navi-icon"> <i class="la la-edit"></i> </span> <span class="navi-text">编辑用户</span> </a> </li> <li class="navi-item"> <a href="JavaScript:;" class="navi-link" onclick="agent.del_user(' + _0x42f32d['id'] + ');" > <span class="navi-icon"> <i class="la la-trash-o"></i> </span> <span class="navi-text">删除用户</span> </a> </li> </ul> </div> </div> </div>';
          }
        }, {
          'field': 'id',
          'title': '用户ID',
          'sortable': 'desc',
          'type': 'number',
          'selector': false,
          'textAlign': 'center'
        }, {
          'field': 'user_name',
          'title': '昵称'
        }, {
          'field': 'email',
          'title': '邮箱'
        }, {
          'field': 'money',
          'title': '余额',
          'template': function (_0x3178fe) {
            return _0x3178fe['money'] + ' 元';
          }
        }, {
          'field': 'unusedTraffic',
          'title': '剩余流量'
        }, {
          'field': 'class',
          'title': '等级'
        }, {
          'field': 'class_expire',
          'title': '等级到期'
        }]
      });
      $('#agent_user_query_class')['on']('change', function () {
        _0x69415c['search']($(this)['val']()['toLowerCase'](), 'class');
      });
      $('#agent_user_query_class')['selectpicker']();
    };
    var _0x5cf5e = function () {
      var _0x32f7de = $('#ajax_agent_take_log_data')['KTDatatable']({
        'data': {
          'type': 'remote',
          'source': {
            'read': {
              'method': 'GET',
              'url': '/user/agent_data/table/agent_take_log',
              'map': function (_0x10af68) {
                var _0x5cb288 = _0x10af68;
                if (typeof _0x10af68['data'] !== 'undefined') {
                  _0x5cb288 = _0x10af68['data'];
                }
                return _0x5cb288;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 0x5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'toolbar': {
          'placement': ['bottom'],
          'items': {
            'pagination': {
              'pageSizeSelect': [0x5, 0xa, 0xf, 0x14, 0x1e, 0x32, 0x64]
            }
          }
        },
        'translate': {
          'records': {
            'processing': '正在加载...',
            'noRecords': '暂无记录'
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': '当前显示 {{start}} - {{end}} 共 {{total}} 项',
                'default': {
                  'first': '跳到第一页',
                  'prev': '上一页',
                  'next': '下一页',
                  'last': '跳到最后一页',
                  'more': '更多页面',
                  'input': '输入页数',
                  'select': '选择页面显示数量'
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': '记录ID',
          'sortable': 'desc',
          'type': 'number',
          'width': 0x46,
          'selector': false,
          'textAlign': 'center'
        }, {
          'field': 'total',
          'title': '金额',
          'template': function (_0x4302d1) {
            return _0x4302d1['total'] + ' 元';
          }
        }, {
          'field': 'type',
          'title': '提现方式',
          'template': function (_0x349185) {
            var _0x3a7218 = {
              1: '转至钱包余额',
              2: '转账提现'
            };
            return _0x3a7218[_0x349185['type']];
          }
        }, {
          'field': 'datetime',
          'title': '申请时间',
          'template': function (_0x4487d2) {
            return mt['getTimeForm'](_0x4487d2['datetime']);
          }
        }, {
          'field': 'status',
          'title': '状态',
          'template': function (_0x2a2ce5) {
            var _0x7aee52 = {
              '-1': {
                'title': '已退回',
                'state': 'danger'
              },
              0: {
                'title': '处理中',
                'state': 'primary'
              },
              1: {
                'title': '已处理',
                'state': 'success'
              }
            };
            return '<span class="label label-' + _0x7aee52[_0x2a2ce5['status']]['state'] + ' label-dot mr-2"></span><span class="font-weight-bold text-' + _0x7aee52[_0x2a2ce5['status']]['state'] + '">' + _0x7aee52[_0x2a2ce5['status']]['title'] + '</span>';
          }
        }]
      });
      $('#agent_take_log_query_status')['on']('change', function () {
        _0x32f7de['search']($(this)['val']()['toLowerCase'](), 'status');
      });
      $('#agent_take_log_query_status')['selectpicker']();
    };
    var _0x55cc5f = function () {
      $['ajax']({
        'type': 'get',
        'url': '/user/agent_data/table/amount_records',
        'dataType': 'json',
        'data': {},
        'success': function (_0x4efe00) {
          _0x21d079(_0x4efe00);
        },
        'error': function (_0x2336ff) {
          mt['swal']('发生错误：' + _0x2336ff['status'], 'error');
        }
      });
    };
    var _0x21d079 = function (_0x5ec54f) {
      var _0x22bb01 = document['getElementById']('kt_tiles_widget_1_chart');
      var _0x30d2bf = KTUtil['hasAttr'](_0x22bb01, 'data-color') ? KTUtil['attr'](_0x22bb01, 'data-color') : 'primary';
      var _0x2bfd0e = parseInt(KTUtil['css'](_0x22bb01, 'height'));
      if (!_0x22bb01) {
        return;
      }
      let _0x59d20b = [];
      let _0x1e7955 = [];
      for (let _0x784d87 in _0x5ec54f) {
        _0x59d20b['push'](_0x5ec54f[_0x784d87]['total']);
        _0x1e7955['push'](_0x5ec54f[_0x784d87]['time']);
      }
      if (ThemeStyle['theme'] === 'dark') {
        var _0x26b495 = {
          'mode': 'dark'
        };
      } else {
        var _0x26b495 = {};
      }
      var _0x56e665 = {
        'series': [{
          'name': '返利收入',
          'data': _0x59d20b
        }],
        'chart': {
          'type': 'area',
          'height': _0x2bfd0e,
          'toolbar': {
            'show': false
          },
          'zoom': {
            'enabled': false
          },
          'sparkline': {
            'enabled': true
          }
        },
        'plotOptions': {},
        'legend': {
          'show': false
        },
        'dataLabels': {
          'enabled': false
        },
        'theme': _0x26b495,
        'fill': {
          'type': 'gradient',
          'opacity': 0x1,
          'gradient': {
            'type': 'vertical',
            'shadeIntensity': 0.55,
            'gradientToColors': undefined,
            'inverseColors': true,
            'opacityFrom': 0x1,
            'opacityTo': 0.9,
            'stops': [0x19, 0x32, 0x64],
            'colorStops': []
          }
        },
        'stroke': {
          'curve': 'smooth',
          'show': true,
          'width': 0x3,
          'colors': [KTApp['getSettings']()['colors']['theme']['base'][_0x30d2bf]]
        },
        'xaxis': {
          'categories': _0x1e7955,
          'axisBorder': {
            'show': false
          },
          'axisTicks': {
            'show': false
          },
          'labels': {
            'show': false,
            'style': {
              'colors': KTApp['getSettings']()['colors']['gray']['gray-500'],
              'fontSize': '12px',
              'fontFamily': 'Poppins'
            }
          },
          'crosshairs': {
            'show': false,
            'position': 'front',
            'stroke': {
              'color': KTApp['getSettings']()['colors']['gray']['gray-300'],
              'width': 0x1,
              'dashArray': 0x3
            }
          },
          'tooltip': {
            'enabled': true,
            'formatter': undefined,
            'offsetY': 0x0,
            'style': {
              'fontSize': '12px',
              'fontFamily': 'Poppins'
            }
          }
        },
        'yaxis': {
          'min': 0x0,
          'max': Math['max']['apply'](null, _0x59d20b) + 0x2,
          'labels': {
            'show': false,
            'style': {
              'colors': KTApp['getSettings']()['colors']['gray']['gray-500'],
              'fontSize': '12px',
              'fontFamily': 'Poppins'
            }
          }
        },
        'states': {
          'normal': {
            'filter': {
              'type': 'none',
              'value': 0x0
            }
          },
          'hover': {
            'filter': {
              'type': 'none',
              'value': 0x0
            }
          },
          'active': {
            'allowMultipleDataPointsSelection': false,
            'filter': {
              'type': 'none',
              'value': 0x0
            }
          }
        },
        'tooltip': {
          'style': {
            'fontSize': '12px',
            'fontFamily': 'Poppins'
          },
          'y': {
            'formatter': function (_0x227cc4) {
              return '¥' + _0x227cc4;
            }
          }
        },
        'colors': [KTApp['getSettings']()['colors']['theme']['light'][_0x30d2bf]],
        'markers': {
          'colors': [KTApp['getSettings']()['colors']['theme']['light'][_0x30d2bf]],
          'strokeColor': [KTApp['getSettings']()['colors']['theme']['base'][_0x30d2bf]],
          'strokeWidth': 0x3
        },
        'padding': {
          'top': 0x0,
          'bottom': 0x0
        }
      };
      var _0x235614 = new ApexCharts(_0x22bb01, _0x56e665);
      _0x235614['render']();
    };
    var _0x4eb507 = function () {
      $('#add_user_save')['text']('请稍候...')['attr']('disabled', true);
      let _0x42560e = {
        'email': $(' input[ name=\'email\' ] ')['val']()
      };
      if ($('#email_suffix')['length'] > 0x0) {
        _0x42560e['email_suffix'] = $('#email_suffix')['val']();
      }
      $['ajax']({
        'type': 'POST',
        'url': '/user/agent/adduser',
        'dataType': 'json',
        'data': _0x42560e,
        'success': function (_0x2d7a36) {
          mt['ajax_swal'](_0x2d7a36, '/user/agent');
          $('#add_user_save')['text']('保存')['attr']('disabled', false);
        },
        'error': function (_0x2e37a2) {
          Swal['fire']({
            'icon': 'error',
            'title': '出现错误',
            'html': '请刷新页面后重试',
            'confirmButtonText': '确定',
            'confirmButtonClass': 'btn btn-primary'
          })['then'](_0x3a173d => {
            window['location']['reload']();
          });
          $('#add_user_save')['text']('保存')['attr']('disabled', false);
        }
      });
    };
    var _0x339f83 = function (_0x444f67) {
      switch (_0x444f67) {
        case 'edit_user':
          $('#edit_user_save')['text']('请稍候...')['attr']('disabled', true);
          let _0x30b922 = {
            'mode': 'edit_user',
            'name': $(' input[ name=\'user_name\' ] ')['val'](),
            'email': $(' input[ name=\'email\' ] ')['val'](),
            'password': $(' input[ name=\'password\' ] ')['val'](),
            'enable': $('input[name="enable"]:checked')['val']() ? 0x1 : 0x0
          };
          if ($('#email_suffix')['length'] > 0x0) {
            _0x30b922['email_suffix'] = $('#email_suffix')['val']();
          }
          $['ajax']({
            'type': 'POST',
            'url': urlPath,
            'dataType': 'json',
            'data': _0x30b922,
            'success': function (_0x739bc5) {
              mt['ajax_swal'](_0x739bc5);
              $('#edit_user_save')['text']('保存')['attr']('disabled', false);
            },
            'error': function (_0x1872c1) {
              Swal['fire']({
                'icon': 'error',
                'title': '出现错误',
                'html': '请刷新页面后重试',
                'confirmButtonText': '确定',
                'confirmButtonClass': 'btn btn-primary'
              })['then'](_0x5a0754 => {
                window['location']['reload']();
              });
              $('#edit_user_save')['text']('保存')['attr']('disabled', false);
            }
          });
          break;
        case 'buy_shop':
          $('#edit_user_buy_shop')['text']('请稍候...')['attr']('disabled', true);
          $['ajax']({
            'type': 'POST',
            'url': urlPath,
            'dataType': 'json',
            'data': {
              'mode': 'buy_shop',
              'shopid': $('#edit_user_shop')['val']()
            },
            'success': function (_0x101368) {
              mt['ajax_swal'](_0x101368);
              $('#edit_user_buy_shop')['text']('保存')['attr']('disabled', false);
            },
            'error': function (_0x3fb52f) {
              Swal['fire']({
                'icon': 'error',
                'title': '出现错误',
                'html': '请刷新页面后重试',
                'confirmButtonText': '确定',
                'confirmButtonClass': 'btn btn-primary'
              })['then'](_0x21dcf2 => {
                window['location']['reload']();
              });
              $('#edit_user_buy_shop')['text']('保存')['attr']('disabled', false);
            }
          });
          break;
        case 'reset_link':
          $('#edit_user_reset_link')['text']('请稍候...')['attr']('disabled', true);
          $['ajax']({
            'type': 'POST',
            'url': urlPath,
            'dataType': 'json',
            'data': {
              'mode': 'reset_link'
            },
            'success': function (_0x57813f) {
              mt['ajax_swal'](_0x57813f);
              $('#edit_user_reset_link')['text']('重置')['attr']('disabled', false);
            },
            'error': function (_0x10ec17) {
              Swal['fire']({
                'icon': 'error',
                'title': '出现错误',
                'html': '请刷新页面后重试',
                'confirmButtonText': '确定',
                'confirmButtonClass': 'btn btn-primary'
              })['then'](_0xe70117 => {
                window['location']['reload']();
              });
              $('#edit_user_reset_link')['text']('重置')['attr']('disabled', false);
            }
          });
          break;
      }
    };
    var _0x312491 = function (_0x2e65c3) {
      Swal['fire']({
        'icon': 'warning',
        'title': '删除确认',
        'html': '删除用户无法恢复数据!',
        'showCancelButton': true,
        'confirmButtonText': '确定',
        'cancelButtonText': '取消'
      })['then'](_0x39318d => {
        if (_0x39318d['value']) {
          swal['fire']({
            'title': '正在处理...',
            'onOpen': function () {
              swal['showLoading']();
            }
          });
          $['ajax']({
            'type': 'DELETE',
            'url': '/user/agent_data/delete',
            'dataType': 'json',
            'data': {
              'id': _0x2e65c3
            },
            'success': function (_0x1a5a90) {
              if (_0x1a5a90.ret === 0x1) {
                Swal['fire']({
                  'icon': 'success',
                  'title': _0x1a5a90['msg'],
                  'onClose': () => {
                    $('#ajax_agent_user_data')['KTDatatable']('reload');
                  }
                });
              } else if (_0x1a5a90.ret === 0x0) {
                mt['swal'](_0x1a5a90['msg'], 'error');
              }
            },
            'error': function (_0x3905cb) {
              mt['swal']('发生错误：' + _0x3905cb['status'], 'error');
            }
          });
        }
      });
    };
    var _0x21c361 = function () {
      KTApp['block']('#take_money_modal', {
        'overlayColor': '#000000',
        'state': 'primary',
        'message': '请稍候...'
      });
      $['ajax']({
        'type': 'POST',
        'url': '/user/agent/take_total',
        'dataType': 'json',
        'data': {
          'type': $('#take_money_modal li .active')['attr']('data-metron'),
          'total': $(' input[ name=\'take_money\' ] ')['val']()
        },
        'success': function (_0x120be7) {
          mt['ajax_swal'](_0x120be7);
          KTApp['unblock']('#take_money_modal');
        },
        'error': function (_0x3b9156) {
          Swal['fire']({
            'icon': 'error',
            'title': '出现错误',
            'html': '请刷新页面后重试',
            'confirmButtonText': '确定',
            'confirmButtonClass': 'btn btn-primary'
          })['then'](_0x42aad8 => {
            window['location']['reload']();
          });
          KTApp['unblock']('#take_money_modal');
        }
      });
    };
    var _0x3f71ee = function () {
      KTApp['block']('#agent_setting_modal', {
        'overlayColor': '#000000',
        'state': 'primary',
        'message': '请稍候...'
      });
      $['ajax']({
        'type': 'POST',
        'url': '/user/agent/take_account_setting',
        'dataType': 'json',
        'data': {
          'type': $('#take_account_type')['val'](),
          'acc': $(' input[ name=\'take_account_value\' ] ')['val']()
        },
        'success': function (_0x5bfafd) {
          mt['ajax_swal'](_0x5bfafd);
          KTApp['unblock']('#agent_setting_modal');
        },
        'error': function (_0x146ec3) {
          Swal['fire']({
            'icon': 'error',
            'title': '出现错误',
            'html': '请刷新页面后重试',
            'confirmButtonText': '确定',
            'confirmButtonClass': 'btn btn-primary'
          })['then'](_0x5c7894 => {
            window['location']['reload']();
          });
          KTApp['unblock']('#agent_setting_modal');
        }
      });
    };
    return {
      'init': function () {
        _0x5136a5();
      },
      'take_total': function () {
        _0x21c361();
      },
      'take_account_setting': function () {
        _0x3f71ee();
      },
      'add_user': function () {
        _0x4eb507();
      },
      'edit_user': function (_0x20c56c) {
        _0x339f83(_0x20c56c);
      },
      'del_user': function (_0x4441c3) {
        _0x312491(_0x4441c3);
      }
    };
  }();
  jQuery(document)['ready'](function () {
    agent['init']();
  });
}
if (urlPath['indexOf']('/code') > -0x1 || urlPath['indexOf']('/setting/logs') > -0x1) {
  var table = function () {
    return {
      'ajax_data_del': function (_0x3d595c, _0x1c5947, _0x94b1be) {
        Swal['fire']({
          'icon': 'warning',
          'title': '确定删除?',
          'html': '删除后不可恢复',
          'showCancelButton': true,
          'confirmButtonText': '确定删除',
          'cancelButtonText': '取消'
        })['then'](_0x398073 => {
          if (_0x398073['value']) {
            swal['fire']({
              'title': '正在删除中...',
              'onOpen': function () {
                swal['showLoading']();
              }
            });
            $['ajax']({
              'type': 'DELETE',
              'url': '/user/ajax_data/delete',
              'dataType': 'json',
              'data': {
                'mode': _0x94b1be,
                'name': _0x3d595c,
                'id': _0x1c5947
              },
              'success': function (_0x185c4d) {
                if (_0x185c4d.ret) {
                  Swal['fire']({
                    'icon': 'success',
                    'title': _0x185c4d['msg'],
                    'confirmButtonText': '确定',
                    'onClose': () => {
                      $('#ajax_' + _0x3d595c + '_data')['KTDatatable']('reload');
                    }
                  });
                } else if (_0x185c4d.ret === 0x0) {
                  Swal['fire']({
                    'icon': 'error',
                    'title': _0x185c4d['msg'],
                    'confirmButtonText': '确定'
                  });
                } else {
                  window['location']['reload']();
                }
              },
              'error': function (_0x5ba16b) {
                Swal['fire']({
                  'icon': 'error',
                  'title': '发生错误：' + _0x5ba16b['status'],
                  'confirmButtonText': '确定'
                });
              }
            });
          }
        });
      }
    };
  }();
}
