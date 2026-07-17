import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class FilledProfileResults$CounterCollector extends Object {
    private constructor()
    // private children: JavaMap<string, FilledProfileResults$CounterCollector>;
    // private selfValue: number;
    // private totalValue: number;
    addValue(path: Iterator<string>, value: number): void;
}