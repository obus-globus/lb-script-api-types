import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserFactory } from '../../../../org/apache/tika/parser/ParserFactory.d.ts'
export class ParserFactoryFactory extends Object implements Serializable {
    constructor(arg0: string, arg1: { [key: string]: string })
    // private args: { [key: string]: string };
    // private className: string;
    build(): ParserFactory;
}