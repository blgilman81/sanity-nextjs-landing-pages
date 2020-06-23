export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ef2001bd294ef13e6e72715',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rrk6xx3c',
                  apiId: '61cdca60-38ff-4c95-93d9-4b7685ab6144'
                },
                {
                  buildHookId: '5ef2001be209c3062c7bf79e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vaqfxv94',
                  apiId: 'f12edc60-7611-4da6-bac3-c7ab55cd3a8d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/blgilman81/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vaqfxv94.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
