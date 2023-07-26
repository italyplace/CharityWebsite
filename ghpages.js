var ghpages = require('gh-pages');

ghpages.publish(
    'public/dist', // path to public directory
    {
        branch: 'gh-pages',
    },
    () => {
        console.log('Deploy Complete!')
    }
)