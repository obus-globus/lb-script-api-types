import type { StaticProperty } from '../../../../../com/oracle/truffle/api/staticobject/StaticProperty.d.ts'
export class DefaultStaticProperty extends StaticProperty {
    constructor(id: string)
    readonly id: string;
    getId(): string;
}