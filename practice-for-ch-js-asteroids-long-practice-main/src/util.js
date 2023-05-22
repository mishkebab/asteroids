export function randomVec(length = 1) {
    const deg = 2 * Math.PI * Math.random();
    return scale([Math.sin(deg), Math.cos(deg)], length);
}
  
export function scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
}