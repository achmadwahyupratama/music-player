const getListChart = async () => {
    const result = await fetch('----');
    return result
}

const getChartTrack = async (listId) => {
    const resultTrack = await fetch('=====', { listId});
    return resultTrack
}

const beforeMount = async () => {
    try {
        
    const listChart = await getListChart()
    const listChartTrackPromise = listChart.map(chart => {
        return () => getChartTrack(chart.listId)
    })

    const [trackIndonesia, trackUK, trackUSA] = await Promise.all(listChartTrackPromise)
    } catch (error) {
        Notification('error','')
    }
}