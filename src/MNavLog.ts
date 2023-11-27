// #!/usr/bin/env node

// // import * as winston from 'winston';
// // import BrowserConsole from 'winston-transport-browserconsole';
// // import { Syslog } from 'winston-syslog';
// // import { createLogger, format } from 'winston';
// // import fetch from 'node-fetch';

// // Directory used to store Diagnostic and Global Files
// // const log_dir_global = process.env.LOG_DIR || "../log"

// // const level = "debug";
// // winston.configure({
// //     transports: [
// //         new BrowserConsole(
// //             {
// //                 format: winston.format.simple(),
// //                 level,
// //             },
// //         ),
// //         // Uncomment to compare with default Console transport
// //         // new winston.transports.Console({
// //         //     format: winston.format.simple(),
// //         //     level,
// //         // }),
// //     ],
// // });
 
// // winston.debug("DEBUG ", {a: 1, b: "two"});

// enum SecType {
//   ADMN = "ADMN",
//   AUTN = "AUTN",
//   AUTZ = "AUTZ",
//   FILS = "FILS",
//   INPV = "INPV",
//   NETW = "NETW",
//   PROC = "PROC",
//   PTSL = "PTSL",
//   SWUP = "SWUP",
//   MISC = "MISC"
// }

// enum SecStatus {
//   NONE = "NONE",
//   PASS = "PASS",
//   FAIL = "FAIL",
//   DEFR = "DEFR"
// }
  
// class MNavLogger {
//   loggerName: string;
//   component_filepath: string | null;
//   component_level: string;
//   // component_logger!: winston.Logger;

//   constructor(loggerName: string, file_location: string | null = null, level: string = 'info') {
//     this.loggerName = loggerName;
//     this.component_filepath = file_location;
//     this.component_level = this.string_to_level(level);

//     this.addComponentLogger();
//   }

//   diagDebug(correlationId: any, message: string) {
//     this.diagLog('debug', this.getLocInfo(), correlationId, message);
//   }

//   diagInfo(correlationId: any, message: string): void;
//   diagInfo(message: string): void;
//   diagInfo(correlationIdOrMessage: any, message?: string): void {
//     if (message) {
//       this.diagLog('info', this.getLocInfo(), correlationIdOrMessage, message);
//     } else {
//       this.diagLog('info', this.getLocInfo(), "1234", correlationIdOrMessage);
//     }
//   }

//   diagWarn(correlationId: any, message: string) {
//     this.diagLog('warning', this.getLocInfo(), correlationId, message);
//   }

//   diagError(correlationId: any, message: string) {
//     this.diagLog('error', this.getLocInfo(), correlationId, message);
//   }

//   diagCrit(correlationId: any, message: string) {
//     this.diagLog('crit', this.getLocInfo(), correlationId, message);
//   }

//   secInfo(correlationId: any, type: SecType, status: SecStatus, message: string) {
//     this.secLog('info', this.getLocInfo(), correlationId, type, status, message);
//   }

//   secWarn(correlationId: any, type: SecType, status: SecStatus, message: string) {
//     this.secLog('warning', this.getLocInfo(), correlationId, type, status, message);
//   }

//   secError(correlationId: any, type: SecType, status: SecStatus, message: string) {
//     this.secLog('error', this.getLocInfo(), correlationId, type, status, message);
//   }

//   secCrit(correlationId: any, type: SecType, status: SecStatus, message: string) {
//     this.secLog('crit', this.getLocInfo(), correlationId, type, status, message);
//   }

//   isEnabledInfo() {
//     return true;
//     // return this.security_logger.isLevelEnabled('info');
//   }

//   isEnabledDebug() {
//     return true;
//     // return this.security_logger.isLevelEnabled('debug');
//   }

//   private async diagLog(level: string, location: any, correlationId: string, message: string) {
//     const record = JSON.stringify({
//       "loggerName": `MNav.${this.loggerName}`,
//       "level": level,
//       "filename": location.filename.slice(-30),
//       "lineno": location.line_number,
//       "message": message,
//       "function_name": location.function_name,
//       "cid": correlationId
//     });

//     // const response = await 
//     fetch('http://localhost:8888', {
//       method: 'POST',
//       // mode: "cors", // no-cors, *cors, same-origin
//       // cache: "no-store", // *default, no-cache, reload, force-cache, only-if-cached
//       // credentials: "same-origin", // include, *same-origin, omit
//       body: record,
//       headers: {
//         'Content-Type': 'application/json',
//         // Accept: 'application/json',
//       },
//     })
//       .then((response) => {
//         console.debug(response);
//         // …
//       })
//       .catch((error) => {
//         console.error(error);
//       });

//   }

//   private secLog(level: string, location: any, correlationId: string, type: SecType, status: SecStatus, message: string) {
//     const record = {
//       loggerName: `MNav.${this.loggerName}`,
//       level,
//       filename: location.filename.slice(-30),
//       lineno: location.line_number,
//       message,
//       function_name: location.function_name,
//       cid: correlationId,
//       evt: type, 
//       sts: status
//     };
//     console.log(record);
//     // this.component_logger.info("hello");

//   }

//   private getLocInfo() {
//     try {
//       const stackFrame = new Error().stack?.split('\n')[3];
//       const regex = /at (.+):(\d+):(\d+)/;
//       const matches = stackFrame?.match(regex);
  
//       if (matches) {
//         const [, filename, line_number, col_number] = matches;
//         return {
//           filename,
//           line_number: Number(line_number),
//           col_number: Number(col_number),
//         };
//       } else {
//         throw new Error('Stack frame format mismatch');
//       }
//     } catch (error) {
//       console.error(`An error occurred while retrieving location information: ${error}`);
//     }
  
//     // Handle case when location information is unavailable or unexpected
//     return {
//       filename: '',
//       line_number: -1,
//       col_number: -1,
//     };
//   }

//   private addComponentLogger() {
//     // this.component_logger = winston.createLogger({
//     //   transports: [
//     //     new BrowserConsole()
//     //   ]
//     // })

//   }

//   private string_to_level(level_string: string) {
//     const level_mapping: { [key: string]: string } = {
//       info: 'info',
//       warn: 'warning',
//       warning: 'warning',
//       error: 'error',
//       crit: 'crit',
//       debug: 'debug'
//     };

//     const level = level_mapping[level_string.toLowerCase()];

//     if (!level) {
//       throw new Error(`Invalid level specified: ${level_string}`);
//     }

//     return level;
//   }
// }

// export { MNavLogger, SecType, SecStatus };
