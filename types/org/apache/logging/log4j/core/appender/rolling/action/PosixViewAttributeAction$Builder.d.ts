import type { PosixFilePermission } from '../../../../../../../../java/nio/file/attribute/PosixFilePermission.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PathCondition } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathCondition.d.ts'
import type { PosixViewAttributeAction } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PosixViewAttributeAction.d.ts'
import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { StrSubstitutor } from '../../../../../../../../org/apache/logging/log4j/core/lookup/StrSubstitutor.d.ts'
import type { Builder } from '../../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class PosixViewAttributeAction$Builder extends Object implements Builder<PosixViewAttributeAction> {
    constructor()
    // private basePath: string;
    // private configuration: Configuration;
    // private fileGroup: string;
    // private fileOwner: string;
    // private filePermissions: PosixFilePermission[];
    // private filePermissionsString: string;
    // private followLinks: boolean;
    // private maxDepth: number;
    // private pathConditions: PathCondition[];
    // private subst: StrSubstitutor;
    build(): PosixViewAttributeAction;
    getErrorPrefix(): string;
    isValid(): boolean;
    withBasePath(basePath: string): PosixViewAttributeAction$Builder;
    withConfiguration(configuration: Configuration): PosixViewAttributeAction$Builder;
    withFileGroup(fileGroup: string): PosixViewAttributeAction$Builder;
    withFileOwner(fileOwner: string): PosixViewAttributeAction$Builder;
    withFilePermissions(filePermissions: PosixFilePermission[]): PosixViewAttributeAction$Builder;
    withFilePermissionsString(filePermissionsString: string): PosixViewAttributeAction$Builder;
    withFollowLinks(followLinks: boolean): PosixViewAttributeAction$Builder;
    withMaxDepth(maxDepth: number): PosixViewAttributeAction$Builder;
    withPathConditions(pathConditions: PathCondition[]): PosixViewAttributeAction$Builder;
    withSubst(subst: StrSubstitutor): PosixViewAttributeAction$Builder;
}