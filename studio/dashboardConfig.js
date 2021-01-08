export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5ff87ff970c9ceeef65ad088',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-qdi2vcz2',
                  apiId: 'f4cbbfa0-5394-468d-8481-aa27bf45c05f'
                },
                {
                  buildHookId: '5ff87ffa6176d00941b1f200',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-q3zodimf',
                  apiId: '08e9552b-2e29-45f1-a4ba-d0c57b8d0c49'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cilgintokatli/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-q3zodimf.netlify.app', category: 'apps'}
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
