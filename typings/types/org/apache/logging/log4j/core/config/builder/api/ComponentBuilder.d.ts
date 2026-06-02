import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Level } from '../../../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Component } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/Component.d.ts'
import type { ConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ConfigurationBuilder.d.ts'
import type { Builder } from '../../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export interface ComponentBuilder<T extends ComponentBuilder<T>> extends Object, Builder<Component>{
    addAttribute(key: string, value: Object): T;
    addAttribute(key: string, value: boolean): T;
    addAttribute(key: string, value: Enum<Object>): T;
    addAttribute(key: string, value: number): T;
    addAttribute(key: string, value: string): T;
    addAttribute(key: string, level: Level): T;
    addComponent(builder: ComponentBuilder<Object>): T;
    getBuilder(): ConfigurationBuilder<Configuration>;
    getErrorPrefix(): string;
    getName(): string;
    isValid(): boolean;
}