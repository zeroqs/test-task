import {
    CalendarSVG,
    ExitSVG, FinanceSVG,
    HomeSVG,
    MapSVG,
    SearchSVG, SettingsProfileSVG,
    SettingsSVG,
    TableSVG,
    WidgetsSVG
} from "../assets/svg/icon";

const dashBoardNavTree = [
    {
        key: 'home',
        path: `/`,
        title: 'Главная',
        icon: <HomeSVG/>,
        submenu: [],
    },
    {
        key: 'search',
        path: `/address`,
        title: 'Поиск адрессов',
        icon: <SearchSVG/>,
        submenu: [],
    },
    {
        key: 'table',
        path: `/table`,
        title: 'Таблицы',
        icon: <TableSVG/>,
        submenu: [],
    },
    {
        key: 'calendar',
        path: `/calendar`,
        title: 'Календарь',
        icon: <CalendarSVG/>,
        submenu: [],
    },
    {
        key: 'map',
        path: `/map`,
        title: 'Карты',
        icon: <MapSVG/>,
        submenu: [],
    },
    {
        key: 'widgets',
        path: `/widgets`,
        title: 'Виджеты',
        icon: <WidgetsSVG/>,
        submenu: [],
    },
    {
        key: 'settings',
        title: 'Настройки',
        icon: <SettingsSVG/>,
        submenu: [
            {
                key: 'settingsProfile',
                path: `/settings/profile`,
                title: 'Настройки\n' +
                    'профиля',
                icon: <SettingsProfileSVG/>,
                submenu: [],
            },
            {
                key: 'finance',
                path: `/settings/finance`,
                title: 'Управление\n' +
                    'финансами',
                icon: <FinanceSVG/>,
                submenu: [],
            },
        ],
    },
    {
        key: 'exit',
        path: `/exit`,
        title: 'Выход',
        icon: <ExitSVG/>,
        submenu: [],
    },
]

const navigationConfig = [
    ...dashBoardNavTree,
]

export default navigationConfig;
