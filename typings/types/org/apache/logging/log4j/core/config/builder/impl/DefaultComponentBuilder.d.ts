import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Level } from '../../../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Component } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/Component.d.ts'
import type { ComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ComponentBuilder.d.ts'
import type { ConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ConfigurationBuilder.d.ts'
export class DefaultComponentBuilder<T extends ComponentBuilder<T>, CB extends ConfigurationBuilder<Configuration>> extends Object implements ComponentBuilder<T> {
    constructor(builder: CB, type: string)
    constructor(builder: CB, name: string, type: string)
    constructor(builder: CB, name: string, type: string, value: string)
    // private attributes: { [key: string]: string };
    readonly builder: CB;
    // private components: Component[];
    readonly name: string;
    // private type: string;
    // private value: string;
    addAttribute(key: string, value: Object): T;
    addAttribute(key: string, value: boolean): T;
    addAttribute(key: string, value: Enum<any>): T;
    addAttribute(key: string, value: number): T;
    addAttribute(key: string, value: string): T;
    addAttribute(key: string, level: Level): T;
    addComponent(builder: ComponentBuilder<any>): T;
    build(): Component;
    getBuilder(): CB;
    getName(): string;
    put(key: string, value: string): T;
}