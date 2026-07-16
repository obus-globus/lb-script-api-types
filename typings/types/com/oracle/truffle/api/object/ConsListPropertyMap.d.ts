
export class ConsListPropertyMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static empty(): { [key: string]: any };
}