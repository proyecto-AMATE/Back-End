import Winston from 'winston';
import morgan from 'morgan';

const {combine, timestamp, printf, colorize, align} = Winston.format

//Creating the configuration of the morgan middleware to create logs
//for the http requests
const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  {
    stream: {
      write: (message) => DevelopingLogger.http(message.trim()),
    },
  }
);

//Developing logger
/*This logger will be used only for developing, it will log in a colo
format all the thing that need to be logged, it will print on de console*/

const DevelopingLogger = Winston.createLogger({
    level: 'silly',
    format: combine(
        colorize({ all: true }),
        timestamp({
          format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        }),
        align(),
        printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
      ),
    transports: [new Winston.transports.Console()],
})

//Production logger

export {DevelopingLogger, morganMiddleware};