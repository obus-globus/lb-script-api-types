import type { AbstractStringLayout$Builder } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout$Builder.d.ts'
import type { SyslogLayout } from '../../../../../../org/apache/logging/log4j/core/layout/SyslogLayout.d.ts'
import type { Facility } from '../../../../../../org/apache/logging/log4j/core/net/Facility.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class SyslogLayout$Builder<B extends SyslogLayout$Builder<B>> extends AbstractStringLayout$Builder<B> implements Builder<SyslogLayout> {
    constructor()
    readonly escapeNL: string;
    readonly facility: Facility;
    readonly includeNewLine: boolean;
    build(): SyslogLayout;
    getErrorPrefix(): string;
    getEscapeNL(): string;
    getFacility(): Facility;
    isIncludeNewLine(): boolean;
    isValid(): boolean;
    setEscapeNL(escapeNL: string): B;
    setFacility(facility: Facility): B;
    setIncludeNewLine(includeNewLine: boolean): B;
}