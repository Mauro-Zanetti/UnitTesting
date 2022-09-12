using {userlog as my} from '../db/schema';

service api {
    entity Users as projection on my.Users;
    entity Logs as projection on my.Logs;
}