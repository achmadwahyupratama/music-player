'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Songs', 
    [
       {
         songTitle: 'I Will Fly',
         artist: 'Ten2Five',
         GenreId: 3,
         embedCode: 'https://open.spotify.com/embed/track/0IpMEZdKu7FB5KOpNEg8x3',
         createdAt: new Date (),
         updatedAt: new Date ()
       },
       {
        songTitle: 'Tenang',
        artist: 'Yura Yunita',
        GenreId: 2,
        embedCode: 'https://open.spotify.com/embed/track/6ICTnGsaokIDEYobnwuCjZ',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Breakeven',
        artist: 'The Script',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/285hMzLhJwHVLe9QT9qilk',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Helena',
        artist: 'My Chemical Romance',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/5dTHtzHFPyi8TlTtzoz1J9',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'The Scientist',
        artist: 'Coldplay',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/75JFxkI2RXiU7L9VXzMkle',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'The Second You Sleep',
        artist: 'Saybia',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/5MzphLubufqPp6GYQAjhQD',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Welcome to the Black Parade',
        artist: 'My Chemical Romance',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/5wQnmLuC1W7ATsArWACrgW',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'So Far Away',
        artist: 'Avenged Sevenfold',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/1vl4jCsTEs8basRO7pKQ7f',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Stand by Me',
        artist: 'Oasis',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/2gANywSFYF58YFMPdDSAjC',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `Don't Look Back in Anger`,
        artist: 'Oasis',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/0UvCh63URrLFcPkKt99hHd',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Wonderwall',
        artist: 'Oasis',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/5qqabIl2vWzo9ApSC317sa',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Somebody To Love',
        artist: 'Queen',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/5txoZyuAmtCfmDjUCEphWm',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Bohemian Rhapsody',
        artist: 'Queen',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/3z8h0TU7ReDPLIbEnYhWZb',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `I Want To Break Free`,
        artist: 'Queen',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/7iAqvWLgZzXvH38lA06QZg',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `It Will Rain`,
        artist: 'Bruno Mars',
        GenreId: 1,
        embedCode: 'https://open.spotify.com/embed/track/0M3HkE321xpCbCYqVKzr1q',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `Talking To The Moon`,
        artist: 'Bruno Mars',
        GenreId: 1,
        embedCode: 'https://open.spotify.com/embed/track/161DnLWsx1i3u1JT05lzqU',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `Just The Way You Are`,
        artist: 'Bruno Mars',
        GenreId: 1,
        embedCode: 'https://open.spotify.com/embed/track/7BqBn9nzAq8spo5e7cZ0dJ',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `Perfect`,
        artist: 'Ed Sheeran',
        GenreId: 1,
        embedCode: 'https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `Shape of You`,
        artist: 'Ed Sheeran',
        GenreId: 1,
        embedCode: 'https://open.spotify.com/embed/track/7qiZfU4dY1lWllzX7mPBI3',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `Photograph`,
        artist: 'Ed Sheeran',
        GenreId: 1,
        embedCode: 'https://open.spotify.com/embed/track/1HNkqx9Ahdgi1Ixy2xkKkL',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `The Reason`,
        artist: 'Hoobastank',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/58AwxWLaRHn2lTqqH9dLkU',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `Wherever You Will Go`,
        artist: 'The Calling',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/5QpaGzWp0hwB5faV8dkbAz',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `Gravity`,
        artist: 'Coldplay',
        GenreId: 1,
        embedCode: 'https://open.spotify.com/embed/track/44LVgFZvUcBYo98vy71tvd',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `Always be My Baby`,
        artist: 'Mariah Carey',
        GenreId: 1,
        embedCode: 'https://open.spotify.com/embed/track/2aBxt229cbLDOvtL7Xbb9x',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `Do I Wanna Know?`,
        artist: 'Arctic Monkey',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/5FVd6KXrgO9B3JPmC8OPst',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `Come Together`,
        artist: 'The Beatles',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/2EqlS6tkEnglzr7tkKAAYD',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `Use Somebody`,
        artist: 'Kings of Leon',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/5VGlqQANWDKJFl0MBG3sg2',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `Gravity`,
        artist: 'John Mayer',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/3SktMqZmo3M9zbB7oKMIF7',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `You're Gonna Live Forever in Me`,
        artist: 'John Mayer',
        GenreId: 4,
        embedCode: 'https://open.spotify.com/embed/track/51lPx6ZCSalL2kvSrDUyJc',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: `Through the Night`,
        artist: 'IU',
        GenreId: 1,
        embedCode: 'https://open.spotify.com/embed/track/1Bb6jVrsg8cXxMCBxIWJUn',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
         songTitle: `Mornin'`,
         artist: 'Al Jarreau',
         GenreId: 3,
         embedCode: 'https://open.spotify.com/embed/track/4TxBGpTxrNvRNhF39Dl3NQ',
         createdAt: new Date (),
         updatedAt: new Date ()
       },
       {
         songTitle: `After All`,
         artist: 'Al Jarreau',
         GenreId: 3,
         embedCode: 'https://open.spotify.com/embed/track/5g5EdgkfKVUceOTJtm0Kel',
         createdAt: new Date (),
         updatedAt: new Date ()
       },
       {
         songTitle: `We're in This Love Together`,
         artist: 'Al Jarreau',
         GenreId: 3,
         embedCode: 'https://open.spotify.com/embed/track/1Let4BYaYSum46nAGO1i6v',
         createdAt: new Date (),
         updatedAt: new Date ()
       },
       {
         songTitle: `So Nice`,
         artist: 'Olivia Ong',
         GenreId: 3,
         embedCode: 'https://open.spotify.com/embed/track/3yFmsQ1NpKZjJ4bO3eXAdT',
         createdAt: new Date (),
         updatedAt: new Date ()
       },
       {
         songTitle: `Kiss of Life`,
         artist: 'Olivia Ong',
         GenreId: 3,
         embedCode: 'https://open.spotify.com/embed/track/0hMgFcQ36kvFpiPvue0TAI',
         createdAt: new Date (),
         updatedAt: new Date ()
       },
       {
         songTitle: `L-O-V-E`,
         artist: 'Olivia Ong',
         GenreId: 3,
         embedCode: 'https://open.spotify.com/embed/track/2IDtrNROPzOVjcFKglbosp',
         createdAt: new Date (),
         updatedAt: new Date ()
       },
       {
         songTitle: `How Insensitive`,
         artist: 'Olivia Ong',
         GenreId: 3,
         embedCode: 'https://open.spotify.com/embed/track/0F8F7zpFNsmCYmym1AXdTN',
         createdAt: new Date (),
         updatedAt: new Date ()
       },
       {
         songTitle: `Make It Mututal`,
         artist: 'Olivia Ong',
         GenreId: 3,
         embedCode: 'https://open.spotify.com/embed/track/73yC3hJBglgP3YgWupKyrm',
         createdAt: new Date (),
         updatedAt: new Date ()
       },
       {
         songTitle: `Sweet Memories`,
         artist: 'Olivia Ong',
         GenreId: 3,
         embedCode: 'https://open.spotify.com/embed/track/3g7MKGNn8oCMahPtptEE0q',
         createdAt: new Date (),
         updatedAt: new Date ()
       },
       {
        songTitle: 'Adu Rayu',
        artist: 'Glenn Fredly Ft Tulus',
        GenreId: 2,
        embedCode: 'https://open.spotify.com/embed/track/3FcCAFQj4bLpfxo8gj1kk9',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Sekali Ini Saja',
        artist: 'Glenn Fredly',
        GenreId: 2,
        embedCode: 'https://open.spotify.com/embed/track/1GmIlN8URkjZxtV99zKlBk',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Sedih Tak Berujung',
        artist: 'Glenn Fredly',
        GenreId: 2,
        embedCode: 'https://open.spotify.com/embed/track/6xMUMMK64AUpstGjlDvoNn',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Januari',
        artist: 'Glenn Fredly',
        GenreId: 2,
        embedCode: 'https://open.spotify.com/embed/track/3h3BXv7Iq5CTTiN9CHgkNe',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Kasih Putih',
        artist: 'Glenn Fredly',
        GenreId: 2,
        embedCode: 'https://open.spotify.com/embed/track/3Qiv7UhkqYeBExD6gZ1m3k',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Terserah',
        artist: 'Glenn Fredly',
        GenreId: 2,
        embedCode: 'https://open.spotify.com/embed/track/1fFcUhuTyKulwqikvRG2hJ',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Teman Hidup',
        artist: 'Tulus',
        GenreId: 2,
        embedCode: 'https://open.spotify.com/embed/track/1U1qumuS2O5Qttw8G7UXOZ',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Monokrom',
        artist: 'Tulus',
        GenreId: 2,
        embedCode: 'https://open.spotify.com/embed/track/4GfK1qOF3uBWidbPlTCQRL',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Pamit',
        artist: 'Tulus',
        GenreId: 2,
        embedCode: 'https://open.spotify.com/embed/track/3B4VP6swG49n3scg2aMfA6',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Sewindu',
        artist: 'Tulus',
        GenreId: 2,
        embedCode: 'https://open.spotify.com/embed/track/0nXXgjpcisM0bheuDZHAub',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Ruang Sendiri',
        artist: 'Tulus',
        GenreId: 2,
        embedCode: 'https://open.spotify.com/embed/track/3xTRHJwjjTP9dBP9aWbCi1',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Langit Abu-Abu',
        artist: 'Tulus',
        GenreId: 2,
        embedCode: 'https://open.spotify.com/embed/track/2FaquTc3FYvNm7RuO1gD6O',
        createdAt: new Date (),
        updatedAt: new Date ()
       },
       {
        songTitle: 'Sepatu',
        artist: 'Tulus',
        GenreId: 2,
        embedCode: 'https://open.spotify.com/embed/track/73DWDOjVUyJ8sAiAcySvgS',
        createdAt: new Date (),
        updatedAt: new Date ()
       }
     ], {});
 },

 down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Songs', null, {});
 }
};
