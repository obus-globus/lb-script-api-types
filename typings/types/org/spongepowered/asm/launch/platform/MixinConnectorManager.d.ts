import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMixinConnector } from '../../../../../org/spongepowered/asm/mixin/connect/IMixinConnector.d.ts'
export class MixinConnectorManager extends Object {
    constructor()
    // private connectorClasses: string[];
    // private connectors: IMixinConnector[];
    addConnector(arg0: string): void;
    initConnectors(): void;
    inject(): void;
    loadConnectors(): void;
}