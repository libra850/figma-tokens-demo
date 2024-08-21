// eslint-disable-next-line import/no-anonymous-default-export
export default function (plop) {
  plop.setGenerator('component', {
      description: 'storybookのコンポーネントを作成する為のテンプレートを作成します',
      prompts: [
        {
          type: 'input',
          name: 'componentName',
          message: '作成したいコンポーネントの名前を入力してください(例: Button)',
        }
      ],
      actions: [
        {
          type: 'add',
          path: 'src/stories/{{componentName}}/index.tsx',
          templateFile: 'plop-templates/index.tsx.hbs'
        },
        {
          type: 'add',
          path: 'src/stories/{{componentName}}/index.scss',
          templateFile: 'plop-templates/index.scss.hbs'
        },
        {
          type: 'add',
          path: 'src/stories/{{componentName}}/{{componentName}}.stories.ts',
          templateFile: 'plop-templates/stories.ts.hbs'
        }
      ]
  });
};
