import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class ValuePropertiesCollection$PropertiesIterator extends Object implements Iterator<DebugValue> {
    constructor(null_: (Object | null)[], ignoredName: string)
    // private currentIndex: number;
    // private ignoredName: string;
    // private nextMember: string;
    forEachRemaining(arg0: (param0: DebugValue) => void): void;
    hasNext(): boolean;
    next(): DebugValue;
    // private readNext(): string;
    remove(): void;
}