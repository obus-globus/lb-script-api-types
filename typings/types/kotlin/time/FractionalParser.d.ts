import type { Object } from '../../java/lang/Object.d.ts'
export class FractionalParser extends Object {
    static INSTANCE: FractionalParser;
    parse(value: string, startIndex: number, callback: (param0: number) => void): number;
}