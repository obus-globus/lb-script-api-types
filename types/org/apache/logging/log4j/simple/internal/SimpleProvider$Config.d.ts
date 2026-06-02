import type { PrintStream } from '../../../../../../java/io/PrintStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { PropertiesUtil } from '../../../../../../org/apache/logging/log4j/util/PropertiesUtil.d.ts'
export class SimpleProvider$Config extends Object {
    static INSTANCE: SimpleProvider$Config;
    private constructor()
    dateTimeFormat: string;
    defaultLevel: Level;
    props: PropertiesUtil;
    showContextMap: boolean;
    showDateTime: boolean;
    showLogName: boolean;
    showShortName: boolean;
    stream: PrintStream;
}