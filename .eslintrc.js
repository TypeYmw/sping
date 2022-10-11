module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  plugins: [
    'html',
    'vue'
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'vue-global-api'
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/require-explicit-emits': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 限制每行的最大属性/属性数以提高可读性 --- https://eslint.vuejs.org/rules/max-attributes-per-line.html
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1 // 多行情况下，每行属性最大个数
          // allowFirstLine: false   // 不允许第一行有属性
        }
      }
    ],
    // 人们对右括号的位置有自己的偏好。此规则在标签的右括号之前强制换行（或不换行）--- https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never', // 单行元素的配置。主要看当前标签内 最后一个属性与左括号是否在同一行
      'multiline': 'always'
    }],
    // 强制在Vue模板中的自定义组件上使用连字符属性名称。--- https://eslint.vuejs.org/rules/attribute-hyphenation.html
    'vue/attribute-hyphenation': ['off'],
    // 在花括号插值中强制统一间距 --- https://vuejs.github.io/eslint-plugin-vue/rules/mustache-interpolation-spacing.html
    'vue/mustache-interpolation-spacing': ['off'],
    // 在单行元素的内容前后强制换行。--- https://vuejs.github.io/eslint-plugin-vue/rules/singleline-html-element-content-newline.html
    'vue/singleline-html-element-content-newline': ['off', {
      'ignoreWhenNoAttributes': true, // 没有属性 允许一行
      'ignoreWhenEmpty': true, // 没有内容 允许一行
      'ignores': ['pre', 'textarea']
    }],
    // 确保您保持组件中属性的声明顺序 --- https://vuejs.github.io/eslint-plugin-vue/rules/order-in-components.html
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['components'],
        ['props', 'propsData'],
        'data',
        'computed',
        'LIFECYCLE_HOOKS',
        ['directives', 'filters', 'watch'],
        ['template', 'render'],
        'renderError',
        'methods'
      ]
    }],
    // 旨在强制组件属性的排序 --- https://vuejs.github.io/eslint-plugin-vue/rules/attributes-order.html
    'vue/attributes-order': ['error', {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ]
    }],
    // 强制将自动关闭标志作为配置样式 -- https://vuejs.github.io/eslint-plugin-vue/rules/html-self-closing.html
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'never',
      'math': 'never'
    }],
    // 强制props参数名写法
    'vue/prop-name-casing': ['off'],
    //  强制组件 name 值 的写法 -- 驼峰 还是下划线 --- https://vuejs.github.io/eslint-plugin-vue/rules/name-property-casing.html
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 0,
    // 以下部分是 eslint 规则 --- https://cloud.tencent.com/developer/chapter/12618
    // 对象的 get set 必须成对出现， 如果您不关心对象上同时存在 setter 和 getter，则可以关闭此规则。
    'accessor-pairs': 2,
    // 规则在箭头函数的箭头（=>）之前/之后标准化间距样式。
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 块内 实现间距
    'block-spacing': [2, 'always'],
    // 花括号相对于其控制语句和正文的位置
    'brace-style': [
      2,
      '1tbs', // 强制一个大括号原则
      {
        allowSingleLine: true // 允许 一个块打开和关闭的括号在同一行上
      }
    ],
    // 驼峰命名
    'camelcase': [
      0,
      {
        properties: 'always' // 为属性名强制执行
      }
    ],
    // 对象或者数组 最后一项 尾随逗号
    'comma-dangle': [2, 'never'], // 不允许尾随逗号
    // 规则在变量声明，数组文字，对象文字，函数参数和序列中的逗号前后加上一致的间距。
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    // 逗号样式   在数组元素、对象属性或变量声明之后和同一行上需要一个逗号
    'comma-style': [2, 'last'],
    // 此规则旨在标记无效/缺少的super()调用
    'constructor-super': 2,
    // 在通过确保将块语句包装在花括号中来防止错误并提高代码清晰度。当它遇到忽略大括号的块时它会发出警告。
    'curly': [2, 'multi-line'],
    // 成员表达式中的点之前或之后放置换行符。
    'dot-location': [2, 'property'], // 选项要求点与属性位于同一行
    // 该规则在非空文件的末尾至少执行一个换行符
    'eol-last': 2, // 默认 always 强制文件以换行符结束
    // 'eqeqeq': [2, 'allow-null'],
    //  ES6 generator函数书写 * 前后空格
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 规则期望当你在 Node.js 中使用回调模式时，你会处理这个错误。
    'handle-callback-err': [2, '^(err|error)$'],
    // 缩进 规则
    'indent': [
      2,
      2, // 2格缩进
      {
        SwitchCase: 1 // switch 语句 缩进级别
      }
    ],
    // jsx 语法中 引号 约束
    'jsx-quotes': [2, 'prefer-single'],
    // 对象属性 前后的 空格
    'key-spacing': [
      2,
      {
        beforeColon: false, // 前面不要空格
        afterColon: true // 后面保留空格
      }
    ],
    // 关键字 前后空格
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 构造函数首字母大写， 一般函数首字母小写
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    // 使用new关键字调用不带参数的构造函数时需要括号
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': 'off',
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 0,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false
      }
    ],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [
      2,
      {
        initialized: 'never'
      }
    ],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    'padded-blocks': [2, 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [2, 'always'],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      2,
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ','
        ]
      }
    ],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    yoda: [2, 'never'],
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false
      }
    ],
    'array-bracket-spacing': [2, 'never'],
    'suppressImplicitAnyIndexErrors': 0
  }
};
