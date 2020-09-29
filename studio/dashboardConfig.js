export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f72dacfc2c56d28c923f3e7',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-r2e4jf88',
                  apiId: '66967b7d-b2c2-4c94-a04c-b7430e56e9de'
                },
                {
                  buildHookId: '5f72dacfa7effe2ba01aa563',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-rcana3qs',
                  apiId: '5e8a5775-4574-486d-bf9b-0fd9db50b58a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/suniel009/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-rcana3qs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
