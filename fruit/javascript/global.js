window.app = {
    isTouch: false,
    menu: true,
    seconds: 0,
    gravity: 0.1,
    mouseShift: {
        h: 0,
        v: 0
    },
    isGameOver: false,
    pause: true,
    timeoutBtwLevels: 3,
    backgroundLayouts: {
        front: [
            {
                position: 'bottom',
                color: 'black',
                pointsCount: 15,
                height: 100,
                shift: 30,
                hOut: 100,
                vOut: 100,
                width: 1920,
                dragging: 70
            },
            {
                position: 'top',
                color: 'black',
                pointsCount: 15,
                height: 50,
                shift: 30,
                hOut: 100,
                vOut: 100,
                width: 1920,
                dragging: 70
            }
        ],
        back: [
            {
                position: 'bottom',
                color: '#444444',
                pointsCount: 20,
                height: 120,
                shift: 30,
                hOut: 100,
                vOut: 100,
                width: 1920,
                dragging: 70
            },
            {
                position: 'top',
                color: '#444444',
                pointsCount: 20,
                height: 120,
                shift: 30,
                hOut: 100,
                vOut: 100,
                width: 1920,
                dragging: 70
            }
        ]
    },
    mouse: {
        isClicked: false,
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0
    },
    settings: {
        size: {
            x: 1280,
            y: 800
        },
        hPadding: 200,
        bottomLine: 0
    },
    level: -1,
    levelIsCompleted: true,
    progress: 50,
    levels:[
        {
            maxFruits: 3,
            fruits: ['apple'],
            sub: 0.07,
            points: 13
        },
        {
            maxFruits: 3,
            fruits: ['pear'],
            sub: 0.07,
            points: 13
        },
        {
            maxFruits: 3,
            fruits: ['apple', 'pear'],
            sub: 0.07,
            points: 13
        },
        {
            maxFruits: 3,
            fruits: ['pineapple'],
            sub: 0.07,
            points: 13
        },
        {
            maxFruits: 5,
            fruits: ['strawberry'],
            sub: 0.07,
            points: 13
        },
        {
            maxFruits: 5,
            fruits: ['pear', 'strawberry'],
            sub: 0.1,
            points: 13
        },
        {
            maxFruits: 5,
            fruits: ['apple', 'pineapple'],
            sub: 0.1,
            points: 13
        },
        {
            maxFruits: 5,
            fruits: ['pear', 'melon'],
            sub: 0.1,
            points: 13
        },
        {
            maxFruits: 5,
            fruits: ['apple', 'strawberry'],
            sub: 0.1,
            points: 13
        },
        {
            maxFruits: 5,
            fruits: ['apple', 'melon'],
            sub: 0.1,
            points: 13
        }
    ],
    fruitTypes: ['apple', 'pear', 'pineapple', 'strawberry', 'melon'],
    fruits:{
        apple: [
            {
                color: '#004400',
                data: [
                    [50, 40],
                    [35, 35],
                    [10, 53],
                    [25, 90],
                    [52, 80],
                    [67, 87],
                    [85, 50],
                    [65, 33],
                    [50, 40],
                    [46, 10],
                    [56, 10],
                    [50, 40],

                    [53, 20],
                    [69, 12],
                    [88, 14],
                    [70, 23],
                    [53, 20],

                    [47, 25],
                    [33, 20],
                    [25, 24],
                    [36, 29],
                    [47, 25],
                    [53, 20]
                ]
            },
            {
                color: 'white',
                data: [
                    [28, 65],
                    [37, 63],
                    [43, 52],
                    [30, 48],
                    [28, 65]
                ]
            }
        ],
        pear: [
            {
                color: '#db9e36',
                data: [
                    [40, 20],
                    [30, 45],
                    [10, 53],
                    [25, 90],
                    [65, 87],
                    [87, 53],
                    [67, 40],
                    [54, 17],
                    [40, 20],

                    [47, 20],
                    [40, 5],
                    [50, 3],
                    [47, 20]
                ]
            },
            {
                color: 'white',
                data: [
                    [28, 60],
                    [37, 63],
                    [41, 51],
                    [37, 48],
                    [28, 60]
                ]
            }
        ],
        pineapple: [
            {
                color: '#af7f35',
                data: [
                    [40, 20],
                    [25, 30],
                    [20, 53],
                    [15, 58],
                    [18, 70],
                    [25, 80],
                    [27, 90],
                    [33, 90],
                    [35, 85],
                    [60, 95],
                    [67, 86],
                    [75, 83],
                    [78, 75],
                    [78, 53],
                    [74, 51],
                    [74, 40],
                    [67, 30],
                    [54, 17],
                    [40, 20],

                    [40, 20],
                    [30, 3],
                    [37, 8],
                    [42, 5],
                    [47, 12],
                    [63, 2],
                    [70, 2],
                    [62, 20],
                    [40, 20]
                ]
            },
            {
                color: 'white',
                data: [
                    [40, 35],
                    [35, 45],
                    [43, 47],
                    [47, 36],
                    [40, 35]
                ]
            },
            {
                color: 'white',
                data: [
                    [35, 65],
                    [43, 63],
                    [41, 53],
                    [37, 54],
                    [35, 65]
                ]
            },
            {
                color: 'white',
                data: [
                    [35, 75],
                    [43, 73],
                    [41, 67],
                    [37, 68],
                    [35, 75]
                ]
            }
        ],
        strawberry: [
            {
                color: '#770000',
                data: [
                    [40, 27],
                    [10, 45],
                    [45, 90],
                    [55, 87],
                    [90, 50],
                    [70, 25],
                    [40, 27],
                    [45, 27],
                    [30, 24],
                    [18, 5],
                    [43, 21],
                    [59, 8],
                    [75, 13],
                    [57, 27],
                    [45, 27]
                ]
            },
            {
                color: 'white',
                data: [
                    [35, 45],
                    [33, 50],
                    [44, 49],
                    [42, 44],
                    [35, 45]
                ]
            }
        ],
        melon: [
            {
                color: '#003300',
                data: [
                    [40, 27],
                    [10, 52],
                    [33, 90],
                    [63, 90],
                    [69, 85],
                    [90, 80],
                    [90, 45],
                    [58, 27],
                    [40, 27],

                    [49, 27],
                    [58, 19],
                    [52, 8],
                    [47, 10],
                    [51, 3],
                    [55, 3],
                    [60, 19],
                    [53, 27],
                    [49, 27]
                ]
            },
            {
                color: 'white',
                data: [
                    [50, 35],
                    [40, 37],
                    [27, 51],
                    [40, 80],
                    [53, 85],
                    [45, 67],
                    [50, 35]
                ]
            },
            {
                color: 'white',
                data: [
                    [60, 37],
                    [70, 50],
                    [67, 55],
                    [80, 53],
                    [65, 35],
                    [60, 37]
                ]
            }
        ]
    }
};