export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6047df487b86ad00a8388535',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-apollo-11-studio',
                  apiId: '2507b610-237c-4fa7-8f12-d525d1c379ca'
                },
                {
                  buildHookId: '6047df48de2ebb00969137a1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-apollo-11',
                  apiId: 'ff1d8fdc-1c01-43cd-bbea-b8e73bc372d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrleon/sanity-gatsby-apollo11',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-apollo-11.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
