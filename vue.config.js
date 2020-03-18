module.exports = {
    pages: {
        index: {        
            entry: 'src/main.js',        
            template: 'public/index.html',        
            filename: 'index.html',        
            title: 'Corona VIruses Monitoring',        
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },        
    },
    pwa: {
        name: 'Corona VIruses Monitoring',
        themeColor: '#34495e',
        backgroundColor: '#34495e',
        msTileColor: '#34495e',
    }
}