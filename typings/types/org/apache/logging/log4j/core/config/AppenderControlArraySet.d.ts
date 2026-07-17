import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { AppenderControl } from '../../../../../../org/apache/logging/log4j/core/config/AppenderControl.d.ts'
export class AppenderControlArraySet extends Object {
    constructor()
    // private appenderArray: AppenderControl[];
    add(control: AppenderControl): boolean;
    asMap(): JavaMap<string, Appender>;
    clear(): AppenderControl[];
    get(): AppenderControl[];
    isEmpty(): boolean;
    remove(name: string): AppenderControl;
    // private removeElementAt(i: number, array: AppenderControl[]): AppenderControl[];
    toString(): string;
}