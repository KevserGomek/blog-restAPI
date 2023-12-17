const express = require('express')
const app = express()
const port = 3001
var cors = require('cors');
app.use(cors());



const articles = [
    {
        id: 1,
        dataId: 1,
        title: "The mind and body are not separate. what affects one, affects the other",
        description: "Molestiae praesentium et optio itaque perferendis dolorum doloribus corrupti molestias. Eaque sunt debitis libero. Temporibus optio iste excepturi tempora culpa. Aliquam exercitationem adipisci. Reiciendis eveniet ad officiis neque nulla ipsa architecto expedita.\nOfficiis inventore iure eos. Ipsam nisi quam reiciendis qui neque officiis ex explicabo nesciunt. Beatae rerum earum hic nobis ipsam aut minus.\nNostrum at amet dolore culpa dicta laborum ipsam veniam ea. Voluptates repellendus ipsam. Eum nihil eius maxime earum. Illum excepturi ut laboriosam temporibus neque nihil error. Atque doloremque laboriosam. Quis itaque placeat nulla mollitia perferendis commodi repudiandae dignissimos dicta.",
        image: "https://loremflickr.com/640/480"
    },
    {
        id: "2",
        dataId: 2,
        title: "The mind and body are not separate. what affects one, affects the other",
        description: "Molestiae praesentium et optio itaque perferendis dolorum doloribus corrupti molestias. Eaque sunt debitis libero. Temporibus optio iste excepturi tempora culpa. Aliquam exercitationem adipisci. Reiciendis eveniet ad officiis neque nulla ipsa architecto expedita.\nOfficiis inventore iure eos. Ipsam nisi quam reiciendis qui neque officiis ex explicabo nesciunt. Beatae rerum earum hic nobis ipsam aut minus.\nNostrum at amet dolore culpa dicta laborum ipsam veniam ea. Voluptates repellendus ipsam. Eum nihil eius maxime earum. Illum excepturi ut laboriosam temporibus neque nihil error. Atque doloremque laboriosam. Quis itaque placeat nulla mollitia perferendis commodi repudiandae dignissimos dicta.",
        image: "https://loremflickr.com/640/480"
    },
    {
        id: "3",
        dataId: 3,
        title: "The mind and body are not separate. what affects one, affects the other",
        description: "Molestiae praesentium et optio itaque perferendis dolorum doloribus corrupti molestias. Eaque sunt debitis libero. Temporibus optio iste excepturi tempora culpa. Aliquam exercitationem adipisci. Reiciendis eveniet ad officiis neque nulla ipsa architecto expedita.\nOfficiis inventore iure eos. Ipsam nisi quam reiciendis qui neque officiis ex explicabo nesciunt. Beatae rerum earum hic nobis ipsam aut minus.\nNostrum at amet dolore culpa dicta laborum ipsam veniam ea. Voluptates repellendus ipsam. Eum nihil eius maxime earum. Illum excepturi ut laboriosam temporibus neque nihil error. Atque doloremque laboriosam. Quis itaque placeat nulla mollitia perferendis commodi repudiandae dignissimos dicta.",
        image: "https://loremflickr.com/640/480"
    },
    {
        id: "4",
        dataId: 4,
        title: "The mind and body are not separate. what affects one, affects the other",
        description: "Molestiae praesentium et optio itaque perferendis dolorum doloribus corrupti molestias. Eaque sunt debitis libero. Temporibus optio iste excepturi tempora culpa. Aliquam exercitationem adipisci. Reiciendis eveniet ad officiis neque nulla ipsa architecto expedita.\nOfficiis inventore iure eos. Ipsam nisi quam reiciendis qui neque officiis ex explicabo nesciunt. Beatae rerum earum hic nobis ipsam aut minus.\nNostrum at amet dolore culpa dicta laborum ipsam veniam ea. Voluptates repellendus ipsam. Eum nihil eius maxime earum. Illum excepturi ut laboriosam temporibus neque nihil error. Atque doloremque laboriosam. Quis itaque placeat nulla mollitia perferendis commodi repudiandae dignissimos dicta.",
        image: "https://loremflickr.com/640/480"
    },
    {
        id: "5",
        dataId: 5,
        title: "The mind and body are not separate. what affects one, affects the other",
        description: "Molestiae praesentium et optio itaque perferendis dolorum doloribus corrupti molestias. Eaque sunt debitis libero. Temporibus optio iste excepturi tempora culpa. Aliquam exercitationem adipisci. Reiciendis eveniet ad officiis neque nulla ipsa architecto expedita.\nOfficiis inventore iure eos. Ipsam nisi quam reiciendis qui neque officiis ex explicabo nesciunt. Beatae rerum earum hic nobis ipsam aut minus.\nNostrum at amet dolore culpa dicta laborum ipsam veniam ea. Voluptates repellendus ipsam. Eum nihil eius maxime earum. Illum excepturi ut laboriosam temporibus neque nihil error. Atque doloremque laboriosam. Quis itaque placeat nulla mollitia perferendis commodi repudiandae dignissimos dicta.",
        image: "https://loremflickr.com/640/480"
    },
    {
        id: "6",
        dataId: 6,
        title: "The mind and body are not separate. what affects one, affects the other",
        description: "Molestiae praesentium et optio itaque perferendis dolorum doloribus corrupti molestias. Eaque sunt debitis libero. Temporibus optio iste excepturi tempora culpa. Aliquam exercitationem adipisci. Reiciendis eveniet ad officiis neque nulla ipsa architecto expedita.\nOfficiis inventore iure eos. Ipsam nisi quam reiciendis qui neque officiis ex explicabo nesciunt. Beatae rerum earum hic nobis ipsam aut minus.\nNostrum at amet dolore culpa dicta laborum ipsam veniam ea. Voluptates repellendus ipsam. Eum nihil eius maxime earum. Illum excepturi ut laboriosam temporibus neque nihil error. Atque doloremque laboriosam. Quis itaque placeat nulla mollitia perferendis commodi repudiandae dignissimos dicta.",
        image: "https://loremflickr.com/640/480"
    }
];


app.get('/articles', (req,res) => {
    res.json(articles);
})

app.get('/articles/:dataId', (req, res) => {
    const articleId = req.params.dataId;
    const article = articles.find(article => article.id == articleId);

    res.json(article);

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


  

