var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'git@github.com:italyplace/CharityWebsite.git', // Update to point to your repository  
        user: {
            name: 'Davide Bizzi', // update to use your name
            email: 'davidebizzi91@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)