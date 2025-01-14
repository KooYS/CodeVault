interface MenuItem {
  title: string;
  url: string;
  visible?: boolean;
  items?: MenuItem[];
}

const side_bar_menu: MenuItem[] = [
  {
    title: "🏠 Dashboard",
    url: "/dashboard",
    visible: true,
    items: [
      {
        title: "📊 Overview",
        url: "/dashboard/overview",
      },
      {
        title: "🕒 Recent Updates",
        url: "/dashboard/recent_updates",
      },
    ],
  },
  {
    title: "💻 Components",
    url: "/components",
    visible: false,
    items: [
      {
        title: "🎨 UI Components",
        url: "/components/ui_components",
        items: [
          {
            title: "🔘 Buttons",
            url: "/components/ui_components/buttons",
          },
          {
            title: "🖼️ Modals",
            url: "/components/ui_components/modals",
          },
          {
            title: "📋 Tables",
            url: "/components/ui_components/tables",
          },
          {
            title: "🔽 Dropdowns",
            url: "/components/ui_components/dropdowns",
          },
        ],
      },
      {
        title: "📝 Form Components",
        url: "/components/form_components",
        items: [
          {
            title: "🔤 Input Fields",
            url: "/components/form_components/input_fields",
          },
          {
            title: "☑️ Checkboxes & Radios",
            url: "/components/form_components/checkboxes_radios",
          },
          {
            title: "✅ Validation Utilities",
            url: "/components/form_components/validation_utilities",
          },
        ],
      },
      {
        title: "📐 Layout Components",
        url: "/components/layout_components",
        items: [
          {
            title: "📊 Grid System",
            url: "/components/layout_components/grid_system",
          },
          {
            title: "📦 Flex Utilities",
            url: "/components/layout_components/flex_utilities",
          },
          {
            title: "📁 Containers",
            url: "/components/layout_components/containers",
          },
        ],
      },
    ],
  },
  {
    title: "⚡ Hooks",
    url: "/hooks",
    visible: true,
    items: [
      {
        title: "🔄 State Management",
        url: "/hooks/state_management",
        visible: true,
        items: [
          {
            title: "useLocalStorage",
            url: "/hooks/state_management/use_local_storage",
          },
          {
            title: "useSessionStorage",
            url: "/hooks/state_management/use_session_storage",
          },
        ],
      },
      {
        title: "🌐 API Calls",
        url: "/hooks/api_calls",
        visible: false,
        items: [
          {
            title: "📡 useFetch",
            url: "/hooks/api_calls/use_fetch",
          },
          {
            title: "🌍 useAxios",
            url: "/hooks/api_calls/use_axios",
          },
        ],
      },
      {
        title: "🧩 Custom Hooks",
        url: "/hooks/custom_hooks",
        visible: true,
        items: [
          {
            title: "useLoading",
            url: "/hooks/custom_hooks/use_loading",
          },
          {
            title: "useMedia",
            url: "/hooks/custom_hooks/use_media",
          },
          {
            title: "⏱️ useDebounce",
            url: "/hooks/custom_hooks/use_debounce",
            visible: false,
          },
          {
            title: "⏳ useThrottle",
            url: "/hooks/custom_hooks/use_throttle",
            visible: false,
          },
          {
            title: "🔁 useToggle",
            url: "/hooks/custom_hooks/use_toggle",
            visible: false,
          },
        ],
      },
    ],
  },
  {
    title: "🔗 Algorithms",
    url: "/algorithms",
    visible: false,
    items: [
      {
        title: "📚 Sorting & Searching",
        url: "/algorithms/sorting_searching",
        items: [
          {
            title: "⚡ Quick Sort",
            url: "/algorithms/sorting_searching/quick_sort",
          },
          {
            title: "🔍 Binary Search",
            url: "/algorithms/sorting_searching/binary_search",
          },
        ],
      },
      {
        title: "🛠️ Data Structures",
        url: "/algorithms/data_structures",
        items: [
          {
            title: "📑 Stack & Queue",
            url: "/algorithms/data_structures/stack_queue",
          },
          {
            title: "🔗 Linked List",
            url: "/algorithms/data_structures/linked_list",
          },
        ],
      },
      {
        title: "📈 Optimization",
        url: "/algorithms/optimization",
        items: [
          {
            title: "📊 Dynamic Programming",
            url: "/algorithms/optimization/dynamic_programming",
          },
          {
            title: "📦 Memoization Examples",
            url: "/algorithms/optimization/memoization_examples",
          },
        ],
      },
    ],
  },
  {
    title: "🎨 Styles",
    url: "/styles",
    visible: false,
    items: [
      {
        title: "🌐 Global Styles",
        url: "/styles/global_styles",
        items: [
          {
            title: "📄 Reset CSS",
            url: "/styles/global_styles/reset_css",
          },
          {
            title: "🎨 Theming",
            url: "/styles/global_styles/theming",
          },
        ],
      },
      {
        title: "✨ Animations",
        url: "/styles/animations",
        items: [
          {
            title: "🎥 CSS Transitions",
            url: "/styles/animations/css_transitions",
          },
          {
            title: "🎬 Framer Motion",
            url: "/styles/animations/framer_motion",
          },
        ],
      },
      {
        title: "🛠️ Utility Classes",
        url: "/styles/utility_classes",
        items: [
          {
            title: "📏 Margins & Padding",
            url: "/styles/utility_classes/margins_padding",
          },
          {
            title: "📐 Flexbox Utilities",
            url: "/styles/utility_classes/flexbox_utilities",
          },
        ],
      },
    ],
  },
  {
    title: "🛠️ Utilities",
    url: "/utilities",
    visible: false,
    items: [
      {
        title: "📅 Date & Time",
        url: "/utilities/date_time",
        items: [
          {
            title: "⏳ Formatting Functions",
            url: "/utilities/date_time/formatting_functions",
          },
          {
            title: "🌍 Timezone Handling",
            url: "/utilities/date_time/timezone_handling",
          },
        ],
      },
      {
        title: "✂️ String Manipulations",
        url: "/utilities/string_manipulations",
        items: [
          {
            title: "🔤 Parsing & Tokenizing",
            url: "/utilities/string_manipulations/parsing_tokenizing",
          },
        ],
      },
      {
        title: "🚨 Error Handling",
        url: "/utilities/error_handling",
        items: [
          {
            title: "🗒️ Logging Utilities",
            url: "/utilities/error_handling/logging_utilities",
          },
          {
            title: "🛡️ Fallback Components",
            url: "/utilities/error_handling/fallback_components",
          },
        ],
      },
    ],
  },
];

const filterMenu = (menu: MenuItem[]): MenuItem[] => {
  return menu
    .filter((item) => item.visible !== false)
    .map((item) => ({
      ...item,
      items: item.items ? filterMenu(item.items) : [],
    }));
};

const filtered_side_bar_menu = filterMenu(side_bar_menu);

export { filtered_side_bar_menu as side_bar_menu, type MenuItem };
