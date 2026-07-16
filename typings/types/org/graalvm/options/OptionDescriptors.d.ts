import type { OptionDescriptor } from '../../../org/graalvm/options/OptionDescriptor.d.ts'
export class OptionDescriptors {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static EMPTY: OptionDescriptor[];
    static create(paramdescriptors: OptionDescriptor[]): OptionDescriptor[];
    static createUnion(...paramdescriptors: OptionDescriptor[][]): OptionDescriptor[];
}