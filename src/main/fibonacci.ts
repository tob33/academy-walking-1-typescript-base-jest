export class Fibonacci {
    getOutput(position: number): number {
    if (position === 0 || position === 1) {
        return position}
    if (position > 1 && position <= 4) {
        return position-1;}
    return this.getOutput(position-1)+this.getOutput(position-2)
    }
}