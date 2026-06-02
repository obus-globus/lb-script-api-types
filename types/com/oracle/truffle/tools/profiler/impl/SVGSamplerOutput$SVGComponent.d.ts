import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface SVGSamplerOutput$SVGComponent extends Object{
    css(): string;
    drawCanvas(x: number, y: number): string;
    height(): number;
    initFunction(argName: string): string;
    resetSearchFunction(): string;
    resizeFunction(): string;
    script(): string;
    searchFunction(argName: string): string;
    width(): number;
}