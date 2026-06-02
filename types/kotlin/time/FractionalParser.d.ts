import type { Object } from '../../java/lang/Object.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
export class FractionalParser extends Object {
    static INSTANCE: FractionalParser;
    parse(value: string, startIndex: number, callback: Function1<number, void>): number;
}