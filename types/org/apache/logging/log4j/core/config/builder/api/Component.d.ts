import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class Component extends Object {
    constructor()
    constructor(pluginType: string)
    constructor(pluginType: string, name: string)
    constructor(pluginType: string, name: string, value: string)
    readonly attributes: { [key: string]: string };
    readonly components: Component[];
    readonly pluginType: string;
    readonly value: string;
    addAttribute(key: string, newValue: string): string;
    addComponent(component: Component): void;
    getAttributes(): { [key: string]: string };
    getComponents(): Component[];
    getPluginType(): string;
    getValue(): string;
}