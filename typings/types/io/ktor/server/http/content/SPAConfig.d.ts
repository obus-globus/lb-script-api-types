import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SPAConfig extends Object {
    constructor(defaultPage: string, applicationRoute: string, filesPath: string, useResources: boolean, ignoredFiles: (param0: string) => boolean[])
    applicationRoute: string;
    defaultPage: string;
    filesPath: string;
    // private ignoredFiles: (param0: string) => boolean[];
    /*not mapped: */ getIgnoredFiles$ktor_server_core(): (param0: string) => boolean[];
    useResources: boolean;
}