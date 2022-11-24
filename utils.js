export const randomColors = () => {
    const colors = [
        '#991b1b', '#ca8a04', '#064e3b', '#1d4ed8', '#3730a3', '#be123c', '#be185d'
    ];
    // console.log(colors);
    return colors[Math.floor(Math.random()*colors.length)]
}