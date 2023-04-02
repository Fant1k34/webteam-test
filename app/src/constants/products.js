/**
 * All companies products with their ID (short name),
 * Logos, Name, Competencies (gray field at design),
 * Desktop Image position (it's okay to reorder it):
 *  1   2   3
 *  4   5   6
 *  7   8   9
 *  10
 *  Desktop Description position:
 *  1 2
 *  3 4
 *  5 6
 *  7 8
 *  9 10
 *  Mobile position (same like Desktop Description position)
 */
export const products = [
    {
        id: 'IJ',
        name: 'IntelliJ IDEA Ultimate',
        competencies: ['Kotlin', 'Java'],
        logoPath: {
            oneX: '../../../static/ij/idea.png',
            twoX: '../../../static/ij/idea@2x.png',
            threeX: '../../../static/ij/idea@3x.png',
        },
        desktopImageIndex: 1,
        desktopDescriptionIndex: 1,
        mobileIndex: 1,
    },
    {
        id: 'WS',
        name: 'WebStorm',
        competencies: ['HTML'],
        logoPath: {
            oneX: '../../../static/ws/web-storm.png',
            twoX: '../../../static/ws/web-storm@2x.png',
            threeX: '../../../static/ws/web-storm@3x.png',
        },
        desktopImageIndex: 3,
        desktopDescriptionIndex: 2,
        mobileIndex: 2,
    },
    {
        id: 'RE',
        name: 'ReSharper Ultimate',
        competencies: ['C#'],
        logoPath: {
            oneX: '../../../static/re/re-sharper.png',
            twoX: '../../../static/re/re-sharper@2x.png',
            threeX: '../../../static/re/re-sharper@3x.png',
        },
        desktopImageIndex: 2,
        desktopDescriptionIndex: 5,
        mobileIndex: 3,
    },
    {
        id: 'AC',
        name: 'AppCode',
        competencies: ['Swift'],
        logoPath: {
            oneX: '../../../static/ac/app-code.png',
            twoX: '../../../static/ac/app-code@2x.png',
            threeX: '../../../static/ac/app-code@3x.png',
        },
        desktopImageIndex: 5,
        desktopDescriptionIndex: 6,
        mobileIndex: 4,
    },
    {
        id: 'DG',
        name: 'DataGrip',
        competencies: ['MySql', 'Databases'],
        logoPath: {
            oneX: '../../../static/dg/data-grip.png',
            twoX: '../../../static/dg/data-grip@2x.png',
            threeX: '../../../static/dg/data-grip@3x.png',
        },
        desktopImageIndex: 8,
        desktopDescriptionIndex: 7,
        mobileIndex: 5,
    },
    {
        id: 'CL',
        name: 'CLion',
        competencies: ['C', 'C++'],
        logoPath: {
            oneX: '../../../static/cl/c-lion.png',
            twoX: '../../../static/cl/c-lion@2x.png',
            threeX: '../../../static/cl/c-lion@3x.png',
        },
        desktopImageIndex: 6,
        desktopDescriptionIndex: 8,
        mobileIndex: 6,
    },
    {
        id: 'RD',
        name: 'Rider',
        competencies: ['C#', 'F#'],
        logoPath: {
            oneX: '../../../static/rd/rider.png',
            twoX: '../../../static/rd/rider@2x.png',
            threeX: '../../../static/rd/rider@3x.png',
        },
        desktopImageIndex: 4,
        desktopDescriptionIndex: 3,
        mobileIndex: 7,
    },
    {
        id: 'RM',
        name: 'RubyMine',
        competencies: ['Ruby'],
        logoPath: {
            oneX: '../../../static/rm/ruby-mine.png',
            twoX: '../../../static/rm/ruby-mine@2x.png',
            threeX: '../../../static/rm/ruby-mine@3x.png',
        },
        desktopImageIndex: 7,
        desktopDescriptionIndex: 4,
        mobileIndex: 8,
    },
    {
        id: 'PS',
        name: 'PhpStorm',
        competencies: ['PHP'],
        logoPath: {
            oneX: '../../../static/ps/php-storm.png',
            twoX: '../../../static/ps/php-storm@2x.png',
            threeX: '../../../static/ps/php-storm@3x.png',
        },
        desktopImageIndex: 9,
        desktopDescriptionIndex: 9,
        mobileIndex: 9,
    },
    {
        id: 'PC',
        name: 'PyCharm',
        competencies: ['Python'],
        logoPath: {
            oneX: '../../../static/pc/py-charm.png',
            twoX: '../../../static/pc/py-charm@2x.png',
            threeX: '../../../static/pc/py-charm@3x.png',
        },
        desktopImageIndex: 10,
        desktopDescriptionIndex: 10,
        mobileIndex: 10,
    },
]
