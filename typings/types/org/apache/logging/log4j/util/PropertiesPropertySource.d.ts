import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { BiConsumer } from '../../../../../org/apache/logging/log4j/util/BiConsumer.d.ts'
import type { PropertySource } from '../../../../../org/apache/logging/log4j/util/PropertySource.d.ts'
export class PropertiesPropertySource extends Object implements PropertySource {
    constructor(properties: Properties)
    constructor(properties: Properties, priority: number)
    readonly priority: number;
    // private properties: Properties;
    containsProperty(key: string): boolean;
    forEach(action: (param0: string, param1: string) => void): void;
    getNormalForm(tokens: CharSequence[]): CharSequence;
    getPriority(): number;
    getProperty(key: string): string;
    getPropertyNames(): string[];
}