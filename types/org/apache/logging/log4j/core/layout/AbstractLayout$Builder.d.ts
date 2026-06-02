import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
export abstract class AbstractLayout$Builder<B extends AbstractLayout$Builder<B>> extends Object {
    constructor()
    readonly configuration: Configuration;
    readonly footer: number[];
    readonly header: number[];
    asBuilder(): B;
    getConfiguration(): Configuration;
    getFooter(): number[];
    getHeader(): number[];
    setConfiguration(configuration: Configuration): B;
    setFooter(footer: number[]): B;
    setHeader(header: number[]): B;
}