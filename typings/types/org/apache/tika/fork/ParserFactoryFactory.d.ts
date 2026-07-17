import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserFactory } from '../../../../org/apache/tika/parser/ParserFactory.d.ts'
export class ParserFactoryFactory extends Object implements Serializable {
    constructor(arg0: string, arg1: JavaMap<string, string>)
    // private args: JavaMap<string, string>;
    // private className: string;
    build(): ParserFactory;
}