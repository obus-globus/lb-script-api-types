import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class StringSetConfigOption extends Object {
    constructor(arg0: string, arg1: string[])
    readonly defaultValue: string[];
    readonly key: string;
    // private translationKey: string;
    getDefaultValue(): string[];
    getKey(): string;
    getMessage(): Component;
    getValue(): string[];
    setValue(arg0: string[]): void;
}