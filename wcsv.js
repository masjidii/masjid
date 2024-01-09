/*
ATTENTION ! 
This file is for London prayer times as example !
You should edit it to fit your Mosque times.
It is for all years! No need to update it every year.
------------------------------------------------------
*/

var JS_WCSV_DATA =
[
"Date,Day,FajrBegins,FajrJamaat,Sunrise,ZohrBegins,ZohrJamaat,AsrBegins,AsrJamaat,MagribBegins,MagribJamaat,IshaBegins,IshaJamaat,Jumah1,Jumah2,Days",
"01-01,NA,06:37,07:00,08:05,12:09,13:00,14:17,14:45,16:07,16:07,17:21,18:00,12:20,13:00,1",
"01-02,NA,06:37,07:00,08:05,12:10,13:00,14:18,14:45,16:08,16:08,17:22,18:00,12:20,13:00,2",
"01-03,NA,06:37,07:00,08:05,12:10,13:00,14:19,14:45,16:09,16:09,17:23,19:00,12:20,13:00,3",
"01-04,NA,06:36,07:00,08:05,12:11,13:00,14:20,14:45,16:10,16:10,17:25,19:00,12:20,13:00,4",
"01-05,NA,06:36,07:00,08:04,12:11,13:00,14:22,14:45,16:11,16:11,17:26,19:00,12:20,13:00,5",
"01-06,NA,06:36,07:00,08:04,12:12,13:00,14:23,14:45,16:13,16:13,17:27,19:00,12:20,13:00,6",
"01-07,NA,06:35,07:00,08:03,12:12,12:20,14:24,14:45,16:14,16:14,17:28,19:00,12:20,13:00,7",
"01-08,NA,06:35,07:00,08:03,12:13,13:00,14:25,14:45,16:15,16:15,17:29,18:00,12:20,13:00,8",
"01-09,NA,06:34,07:00,08:02,12:13,13:00,14:27,14:45,16:17,16:17,17:31,18:00,12:20,13:00,9",
"01-10,NA,06:34,07:00,08:02,12:13,13:00,14:28,14:45,16:18,16:18,17:33,19:00,12:20,13:00,10",
"01-11,NA,06:33,07:00,08:01,12:14,13:00,14:29,14:45,16:20,16:20,17:34,19:00,12:20,13:00,11",
"01-12,NA,06:32,07:00,08:00,12:14,13:00,14:31,14:45,19:41,19:41,17:35,19:00,12:20,13:00,12",
"01-13,NA,06:30,07:00,08:00,12:15,13:00,14:32,14:45,16:23,16:23,17:37,19:00,12:20,13:00,13",
"01-14,NA,06:30,06:45,07:59,12:15,12:20,14:34,15:00,16:24,16:24,17:38,19:00,12:20,13:00,14",
"01-15,NA,06:29,06:45,07:58,12:15,13:00,14:35,15:00,16:26,16:26,17:40,18:00,12:20,13:00,15",
"01-16,NA,06:28,06:45,07:57,12:16,13:00,14:37,15:00,16:28,16:28,17:42,18:00,12:20,13:00,16",
"01-17,NA,06:27,06:45,07:56,12:16,13:00,14:38,15:00,16:29,16:29,17:43,19:00,12:20,13:00,17",
"01-18,NA,06:26,06:45,07:55,12:16,13:00,14:40,15:00,16:31,16:31,17:45,19:00,12:20,13:00,18",
"01-19,NA,06:25,06:45,07:54,12:17,13:00,14:42,15:00,16:32,16:32,17:47,19:00,12:20,13:00,19",
"01-20,NA,06:24,06:45,07:53,12:17,13:00,14:43,15:00,16:34,16:34,17:48,19:00,12:20,13:00,20",
"01-21,NA,06:23,06:45,07:52,12:17,12:20,14:45,15:15,16:36,16:36,17:50,19:00,12:20,13:00,21",
"01-22,NA,06:22,06:45,07:50,12:17,13:00,14:46,15:15,16:38,16:38,17:52,18:15,12:20,13:00,22",
"01-23,NA,06:20,06:45,07:49,12:18,13:00,14:48,15:15,16:39,16:39,17:53,18:15,12:20,13:00,23",
"01-24,NA,06:19,06:45,07:48,12:18,13:00,14:50,15:15,16:41,16:41,17:55,19:00,12:20,13:00,24",
"01-25,NA,06:18,06:45,07:47,12:18,13:00,14:51,15:15,16:43,16:43,17:57,19:00,12:20,13:00,25",
"01-26,NA,06:16,06:45,07:45,12:18,13:00,14:53,15:15,16:45,16:45,17:59,19:00,12:20,13:00,26",
"01-27,NA,06:15,06:45,07:44,12:19,13:00,14:55,15:15,16:46,16:46,18:00,19:00,12:20,13:00,27",
"01-28,NA,06:14,06:30,07:43,12:19,12:20,14:56,15:30,16:48,16:48,18:02,19:00,12:20,13:00,28",
"01-29,NA,06:13,06:30,07:41,12:19,13:00,14:58,15:30,16:50,16:50,18:04,18:30,12:20,13:00,29",
"01-30,NA,06:12,06:30,07:40,12:19,13:00,15:00,15:30,16:52,16:52,18:06,18:30,12:20,13:00,30",
"01-31,NA,06:10,06:30,07:38,12:19,13:00,15:02,15:30,16:53,16:53,18:08,19:00,12:20,13:00,31",
"02-01,NA,06:09,06:30,07:36,12:19,13:00,15:03,15:30,16:55,16:55,18:09,19:00,12:20,13:00,32",
"02-02,NA,06:07,06:30,07:35,12:19,13:00,15:05,15:30,16:57,16:57,18:11,19:00,12:20,13:00,33",
"02-03,NA,06:05,06:30,07:33,12:20,13:00,15:07,15:30,16:59,16:59,18:13,19:00,12:20,13:00,34",
"02-04,NA,06:04,06:15,07:32,12:20,12:30,15:08,15:45,17:01,17:01,18:15,19:00,12:20,13:00,35",
"02-05,NA,06:03,06:15,07:30,12:20,13:00,15:10,15:45,17:03,17:03,18:17,19:00,12:20,13:00,36",
"02-06,NA,06:01,06:15,07:28,12:20,13:00,15:12,15:45,17:04,17:04,18:18,19:00,12:20,13:00,37",
"02-07,NA,06:00,06:15,07:26,12:20,13:00,15:14,15:45,17:06,17:06,18:20,19:00,12:20,13:00,38",
"02-08,NA,05:58,06:15,07:25,12:20,13:00,15:15,15:45,17:08,17:08,18:22,19:00,12:20,13:00,39",
"02-09,NA,05:56,06:15,07:23,12:20,13:00,15:17,15:45,17:10,17:10,18:24,19:00,12:20,13:00,40",
"02-10,NA,05:54,06:15,07:21,12:20,13:00,15:19,15:45,17:12,17:12,18:26,19:00,12:20,13:00,41",
"02-11,NA,05:52,06:00,07:19,12:20,12:30,15:20,16:00,17:14,17:14,18:28,19:00,12:20,13:00,42",
"02-12,NA,05:51,06:00,07:17,12:20,13:00,15:22,16:00,17:15,17:15,18:29,19:00,12:20,13:00,43",
"02-13,NA,05:49,06:00,07:15,12:20,13:00,15:24,16:00,17:17,17:17,18:31,19:00,12:20,13:00,44",
"02-14,NA,05:47,06:00,07:14,12:20,13:00,15:25,16:00,17:19,17:19,18:33,19:00,12:20,13:00,45",
"02-15,NA,05:45,06:00,07:12,12:20,13:00,15:27,16:00,17:21,17:21,18:35,19:00,12:20,13:00,46",
"02-16,NA,05:42,06:00,07:10,12:20,13:00,15:29,16:00,17:23,17:23,18:37,19:00,12:20,13:00,47",
"02-17,NA,05:40,06:00,07:08,12:20,13:00,15:30,16:00,17:25,17:25,18:39,19:00,12:20,13:00,48",
"02-18,NA,05:38,05:45,07:06,12:20,12:30,15:32,16:15,17:26,17:26,18:40,19:15,12:20,13:00,49",
"02-19,NA,05:36,05:45,07:04,12:19,13:00,15:34,16:15,17:28,17:28,18:42,19:15,12:20,13:00,50",
"02-20,NA,05:34,05:45,07:02,12:19,13:00,15:35,16:15,17:30,17:30,18:44,19:15,12:20,13:00,51",
"02-21,NA,05:33,05:45,07:00,12:19,13:00,15:37,16:15,17:32,17:32,18:46,19:15,12:20,13:00,52",
"02-22,NA,05:32,05:45,06:58,12:19,13:00,15:39,16:15,17:34,17:34,18:48,19:15,12:20,13:00,53",
"02-23,NA,05:30,05:45,06:55,12:19,13:00,15:40,16:15,17:35,17:35,18:49,19:15,12:20,13:00,54",
"02-24,NA,05:28,05:45,06:53,12:19,13:00,15:42,16:15,17:37,17:37,18:51,19:15,12:20,13:00,55",
"02-25,NA,05:26,05:45,06:51,12:19,12:30,15:43,16:15,17:39,17:39,18:53,19:30,12:20,13:00,56",
"02-26,NA,05:24,05:45,06:49,12:19,13:00,15:45,16:15,17:41,17:41,18:55,19:30,12:20,13:00,57",
"02-27,NA,05:22,05:45,06:47,12:18,13:00,15:47,16:15,17:42,17:42,18:57,19:30,12:20,13:00,58",
"02-28,NA,05:20,05:45,06:45,12:18,13:00,15:48,16:15,17:44,17:44,18:58,19:30,12:20,13:00,59",
"02-29,NA,05:20,05:45,06:45,12:18,13:00,15:48,16:15,17:44,17:44,18:58,19:30,12:20,13:00,59",
"03-01,NA,05:18,05:45,06:43,12:18,13:00,15:50,16:15,17:46,17:46,19:00,19:30,12:20,13:00,60",
"03-02,NA,05:16,05:45,06:41,12:18,13:00,15:51,16:15,17:48,17:48,19:02,19:30,12:20,13:00,61",
"03-03,NA,05:14,05:45,06:38,12:17,13:00,15:53,16:15,17:50,17:50,19:04,19:30,12:20,13:00,62",
"03-04,NA,05:12,05:30,06:36,12:17,12:30,15:54,16:30,17:51,17:51,19:05,19:45,12:20,13:00,63",
"03-05,NA,05:09,05:30,06:34,12:17,13:00,15:56,16:30,17:53,17:53,19:07,19:45,12:20,13:00,64",
"03-06,NA,05:07,05:30,06:32,12:17,13:00,15:57,16:30,17:55,17:55,19:09,19:45,12:20,13:00,65",
"03-07,NA,05:06,05:30,06:30,12:16,13:00,15:59,16:30,17:56,17:56,19:11,19:45,12:20,13:00,66",
"03-08,NA,05:04,05:30,06:27,12:16,13:00,16:00,16:30,17:58,17:58,19:12,19:45,12:20,13:00,67",
"03-09,NA,05:01,05:30,06:25,12:16,13:00,16:02,16:30,18:00,18:00,19:14,19:45,12:20,13:00,68",
"03-10,NA,04:59,05:30,06:23,12:16,13:00,16:03,16:30,18:02,18:02,19:16,19:45,12:20,13:00,69",
"03-11,NA,04:57,05:15,06:21,12:15,12:30,16:05,16:45,18:03,18:03,19:17,20:00,12:20,13:00,70",
"03-12,NA,04:55,05:15,06:18,12:15,13:00,16:06,16:45,18:05,18:05,19:19,20:00,12:20,13:00,71",
"03-13,NA,04:52,05:15,06:16,12:15,13:00,16:07,16:45,18:07,18:07,19:21,20:00,12:20,13:00,72",
"03-14,NA,04:50,05:15,06:14,12:15,13:00,16:09,16:45,18:09,18:09,19:23,20:00,12:20,13:00,73",
"03-15,NA,04:48,05:15,06:12,12:14,13:00,16:10,16:45,18:10,18:10,19:24,20:00,12:20,13:00,74",
"03-16,NA,04:46,05:15,06:09,12:14,13:00,16:12,16:45,18:12,18:12,19:26,20:00,12:20,13:00,75",
"03-17,NA,04:43,05:15,06:07,12:14,13:00,16:13,16:45,18:14,18:14,19:28,20:00,12:20,13:00,76",
"03-18,NA,04:41,05:00,06:05,12:13,12:30,16:14,17:00,18:15,18:15,19:29,20:15,12:20,13:00,77",
"03-19,NA,04:39,05:00,06:02,12:13,13:00,16:16,17:00,18:17,18:17,19:31,20:15,12:20,13:00,78",
"03-20,NA,04:37,05:00,06:00,12:13,13:00,16:17,17:00,18:19,18:19,19:33,20:15,12:20,13:00,79",
"03-21,NA,04:34,05:00,05:58,12:12,13:00,16:18,17:00,18:20,18:20,19:34,20:15,12:20,13:00,80",
"03-22,NA,04:32,05:00,05:56,12:12,13:00,16:20,17:00,18:22,18:22,19:36,20:15,12:20,13:00,81",
"03-23,NA,04:30,05:00,05:53,12:12,13:00,16:21,17:00,18:24,18:24,19:38,20:15,12:20,13:00,82",
"03-24,NA,04:27,05:00,05:51,12:12,13:00,16:22,17:00,18:25,18:25,19:40,20:15,12:20,13:00,83",
"03-25,NA,04:25,05:00,05:49,12:11,12:30,16:24,17:00,18:27,18:27,19:41,20:15,12:20,13:00,84",
"03-26,NA,04:23,05:00,05:46,12:11,13:00,16:25,17:00,18:29,18:29,19:43,20:15,12:20,13:00,85",
"03-27,NA,05:21,05:30,06:44,13:11,13:30,17:26,17:45,19:31,19:31,20:45,21:15,13:15,14:15,86",
"03-28,NA,05:18,05:30,06:42,13:10,13:30,17:27,17:45,19:32,19:32,20:46,21:15,13:15,14:15,87",
"03-29,NA,05:16,05:30,06:40,13:10,13:30,17:29,17:45,19:34,19:34,20:48,21:15,13:15,14:15,88",
"03-30,NA,05:14,05:30,06:37,13:10,13:30,17:30,17:45,19:36,19:36,20:50,21:15,13:15,14:15,89",
"03-31,NA,05:12,05:30,06:35,13:09,13:30,17:31,17:45,19:37,19:37,20:52,21:15,13:15,14:15,90",
"04-01,NA,05:10,05:30,06:33,13:09,13:15,17:32,18:00,19:39,19:39,20:54,21:30,13:15,14:15,91",
"04-02,NA,05:08,05:30,06:31,13:09,13:30,17:34,18:00,19:41,19:41,20:56,21:30,13:15,14:15,92",
"04-03,NA,05:06,05:21,06:28,13:09,13:30,17:35,18:00,19:42,19:42,20:57,21:30,13:15,14:15,93",
"04-04,NA,05:03,05:18,06:26,13:08,13:30,17:36,18:00,19:44,19:44,20:59,21:30,13:15,14:15,94",
"04-05,NA,05:01,05:16,06:24,13:08,13:30,17:37,18:00,19:46,19:46,21:01,21:30,13:15,14:15,95",
"04-06,NA,04:59,05:14,06:22,13:08,13:30,17:38,18:00,19:47,19:47,21:02,21:30,13:15,14:15,96",
"04-07,NA,04:57,05:13,06:19,13:07,13:30,17:40,18:00,19:49,19:49,21:04,21:30,13:15,14:15,97",
"04-08,NA,04:54,05:12,06:17,13:07,13:15,17:41,18:15,19:51,19:51,21:06,21:45,13:15,14:15,98",
"04-09,NA,04:52,05:10,06:15,13:07,13:30,17:42,18:15,19:52,19:52,21:07,21:45,13:15,14:15,99",
"04-10,NA,04:50,05:08,06:13,13:07,13:30,17:43,18:15,19:54,19:54,21:09,21:45,13:15,14:15,100",
"04-11,NA,04:48,05:06,06:11,13:06,13:30,17:44,18:15,19:56,19:56,21:11,21:45,13:15,14:15,101",
"04-12,NA,04:45,05:04,06:08,13:06,13:30,17:45,18:15,19:57,19:57,21:12,21:45,13:15,14:15,102",
"04-13,NA,04:42,05:02,06:06,13:06,13:30,17:46,18:15,19:59,19:59,21:14,21:45,13:15,14:15,103",
"04-14,NA,04:40,05:00,06:04,13:06,13:30,17:48,18:15,20:01,20:01,21:16,21:45,13:15,14:15,104",
"04-15,NA,04:37,04:48,06:02,13:05,13:15,17:49,18:15,20:02,20:02,21:17,21:50,13:15,14:15,105",
"04-16,NA,04:34,04:46,06:00,13:05,13:30,17:50,18:15,20:04,20:04,21:19,21:50,13:15,14:15,106",
"04-17,NA,04:32,04:44,05:58,13:05,13:30,17:51,18:15,20:06,20:06,21:21,21:50,13:15,14:15,107",
"04-18,NA,04:30,04:42,05:56,13:05,13:30,17:52,18:15,08:07,08:07,21:22,21:50,13:15,14:15,108",
"04-19,NA,04:27,04:40,05:54,13:05,13:30,17:53,18:15,20:09,20:09,21:24,21:50,13:15,14:15,109",
"04-20,NA,04:24,04:38,05:51,13:04,13:30,17:54,18:15,20:11,20:11,21:26,21:50,13:15,14:15,110",
"04-21,NA,04:22,04:36,05:49,13:04,13:30,17:55,18:15,20:12,20:12,21:27,21:50,13:15,14:15,111",
"04-22,NA,04:19,04:34,05:47,13:04,13:15,17:56,18:30,20:14,20:14,21:29,22:00,13:15,14:15,112",
"04-23,NA,04:16,04:32,05:45,13:04,13:30,17:57,18:30,20:16,20:16,21:31,22:00,13:15,14:15,113",
"04-24,NA,04:13,04:30,05:43,13:04,13:30,17:58,18:30,20:17,20:17,21:32,22:00,13:15,14:15,114",
"04-25,NA,04:10,04:28,05:41,13:03,13:30,18:00,18:30,20:19,20:19,21:34,22:00,13:15,14:15,115",
"04-26,NA,04:08,04:26,05:39,13:03,13:30,18:01,18:30,20:21,20:21,21:36,22:00,13:15,14:15,116",
"04-27,NA,04:05,04:24,05:37,13:03,13:30,18:02,18:30,20:22,20:22,21:37,22:00,13:15,14:15,117",
"04-28,NA,04:03,04:22,05:35,13:03,13:30,18:03,18:30,20:24,20:24,21:39,22:00,13:15,14:15,118",
"04-29,NA,04:01,04:20,05:34,13:03,13:15,18:04,18:30,20:26,20:26,21:41,22:10,13:15,14:15,119",
"04-30,NA,03:58,04:18,05:32,13:03,13:30,18:05,18:30,20:27,20:27,21:44,22:10,13:15,14:15,120",
"05-01,NA,03:56,04:16,05:30,13:03,13:30,18:06,18:30,20:29,20:29,21:46,22:10,13:15,14:15,121",
"05-02,NA,03:54,04:14,05:28,13:03,13:30,18:07,18:30,20:30,20:30,21:47,22:10,13:15,14:15,122",
"05-03,NA,03:52,04:07,05:26,13:02,13:30,18:08,18:30,20:32,20:32,21:49,22:10,13:15,14:15,123",
"05-04,NA,03:49,04:30,05:24,13:02,13:30,18:09,18:30,20:34,20:34,21:51,22:10,13:15,14:15,124",
"05-05,NA,03:47,04:30,05:23,13:02,13:30,18:10,18:30,20:35,20:35,21:52,22:10,13:15,14:15,125",
"05-06,NA,03:45,04:30,05:21,13:02,13:15,18:11,18:45,20:37,20:37,21:54,22:10,13:15,14:15,126",
"05-07,NA,03:43,04:30,05:19,13:02,13:30,18:12,18:45,20:39,20:39,21:55,22:10,13:15,14:15,127",
"05-08,NA,03:40,04:30,05:17,13:02,13:30,18:12,18:45,20:40,20:40,21:57,22:10,13:15,14:15,128",
"05-09,NA,03:38,04:30,05:16,13:02,13:30,18:13,18:45,20:42,20:42,21:59,22:10,13:15,14:15,129",
"05-10,NA,03:35,04:30,05:14,13:02,13:30,18:14,18:45,20:43,20:43,22:00,22:10,13:15,14:15,130",
"05-11,NA,03:33,04:30,05:13,13:02,13:30,18:15,18:45,20:45,20:45,22:02,22:10,13:15,14:15,131",
"05-12,NA,03:31,04:30,05:11,13:02,13:30,18:16,18:45,20:46,20:46,22:03,22:10,13:15,14:15,132",
"05-13,NA,03:29,04:30,05:10,13:02,13:15,18:17,19:00,20:48,20:48,22:05,22:30,13:15,14:15,133",
"05-14,NA,03:27,04:30,05:08,13:02,13:30,18:18,19:00,20:49,20:49,22:06,22:30,13:15,14:15,134",
"05-15,NA,03:25,04:30,05:07,13:02,13:30,18:19,19:00,20:51,20:51,22:08,22:30,13:15,14:15,135",
"05-16,NA,03:23,04:30,05:05,13:02,13:30,18:20,19:00,20:52,20:52,22:09,22:30,13:15,14:15,136",
"05-17,NA,03:21,04:30,05:04,13:02,13:30,18:21,19:00,20:54,20:54,22:10,22:30,13:15,14:15,137",
"05-18,NA,03:19,04:30,05:02,13:02,13:30,18:21,19:00,20:55,20:55,22:12,22:30,13:15,14:15,138",
"05-19,NA,03:17,04:30,05:01,13:02,13:30,18:22,19:00,20:57,20:57,22:13,22:30,13:15,14:15,139",
"05-20,NA,03:15,04:15,05:00,13:02,13:15,18:23,19:00,20:58,20:58,22:15,22:35,13:15,14:15,140",
"05-21,NA,03:13,04:15,04:59,13:02,13:30,18:24,19:00,20:59,20:59,22:16,22:35,13:15,14:15,141",
"05-22,NA,03:11,04:15,04:57,13:02,13:30,18:25,19:00,21:01,21:01,22:17,22:35,13:15,14:15,142",
"05-23,NA,03:10,04:15,04:56,13:03,13:30,18:25,19:00,21:02,21:02,22:19,22:35,13:15,14:15,143",
"05-24,NA,03:08,04:15,04:55,13:03,13:30,18:26,19:00,21:03,21:03,22:20,22:35,13:15,14:15,144",
"05-25,NA,03:06,04:15,04:54,13:03,13:30,18:27,19:00,21:05,21:05,22:21,22:35,13:15,14:15,145",
"05-26,NA,03:04,04:15,04:53,13:03,13:30,18:28,19:00,21:06,21:06,22:22,22:35,13:15,14:15,146",
"05-27,NA,03:02,04:00,04:52,13:03,13:15,18:28,19:00,21:07,21:07,22:24,22:40,13:15,14:15,147",
"05-28,NA,03:00,04:00,04:51,13:03,13:30,18:29,19:00,21:08,21:08,22:25,22:40,13:15,14:15,148",
"05-29,NA,02:59,04:00,04:50,13:03,13:30,18:30,19:00,21:09,21:09,22:26,22:40,13:15,14:15,149",
"05-30,NA,02:57,04:00,04:49,13:03,13:30,18:31,19:00,21:11,21:11,22:27,22:40,13:15,14:15,150",
"05-31,NA,02:55,04:00,04:48,13:04,13:30,18:31,19:00,21:12,21:12,22:27,22:40,13:15,14:15,151",
"06-01,NA,02:54,04:00,04:48,13:04,13:30,18:32,19:00,21:13,21:13,22:28,22:40,13:15,14:15,152",
"06-02,NA,02:53,04:00,04:47,13:04,13:30,18:32,19:00,21:14,21:14,22:29,22:40,13:15,14:15,153",
"06-03,NA,02:51,04:00,04:46,13:04,13:15,18:33,19:00,21:15,21:15,22:30,22:45,13:15,14:15,154",
"06-04,NA,02:50,04:00,04:46,13:04,13:30,18:34,19:00,21:16,21:16,22:31,22:45,13:15,14:15,155",
"06-05,NA,02:49,04:00,04:45,13:04,13:30,18:34,19:00,21:16,21:16,22:32,22:45,13:15,14:15,156",
"06-06,NA,02:48,04:00,04:45,13:05,13:30,18:35,19:00,21:17,21:17,22:33,22:45,13:15,14:15,157",
"06-07,NA,02:46,04:00,04:44,13:05,13:30,18:35,19:00,21:18,21:18,22:34,22:45,13:15,14:15,158",
"06-08,NA,02:45,04:00,04:44,13:05,13:30,18:36,19:00,21:19,21:19,22:35,22:45,13:15,14:15,159",
"06-09,NA,02:44,04:00,04:43,13:05,13:30,18:36,19:00,21:20,21:20,22:35,22:45,13:15,14:15,160",
"06-10,NA,02:43,04:00,04:43,13:05,13:15,18:37,19:00,21:20,21:20,22:36,22:50,13:15,14:15,161",
"06-11,NA,02:43,04:00,04:43,13:06,13:30,18:37,19:00,21:21,21:21,22:37,22:50,13:15,14:15,162",
"06-12,NA,02:42,04:00,04:43,13:06,13:30,18:38,19:00,21:22,21:22,22:37,22:50,13:15,14:15,163",
"06-13,NA,02:41,04:00,04:42,13:06,13:30,18:38,19:00,21:22,21:22,22:38,22:50,13:15,14:15,164",
"06-14,NA,02:41,04:00,04:42,13:06,13:30,18:38,19:00,21:23,21:23,22:39,22:50,13:15,14:15,165",
"06-15,NA,02:41,04:00,04:42,13:06,13:30,18:39,19:00,21:23,21:23,22:40,22:50,13:15,14:15,166",
"06-16,NA,02:40,04:00,04:42,13:07,13:30,18:39,19:00,21:24,21:24,22:40,22:50,13:15,14:15,167",
"06-17,NA,02:40,04:00,04:42,13:07,13:15,18:39,19:00,21:24,21:24,22:41,22:50,13:15,14:15,168",
"06-18,NA,02:40,04:00,04:42,13:07,13:30,18:40,19:00,21:24,21:24,22:41,22:50,13:15,14:15,169",
"06-19,NA,02:40,04:00,04:42,13:07,13:30,18:40,19:00,21:24,21:24,22:41,22:50,13:15,14:15,170",
"06-20,NA,02:40,04:00,04:43,13:08,13:30,18:40,19:00,21:25,21:25,22:42,22:50,13:15,14:15,171",
"06-21,NA,02:40,04:00,04:43,13:08,13:30,18:40,19:00,21:25,21:25,22:42,22:50,13:15,14:15,172",
"06-22,NA,02:41,04:00,04:43,13:08,13:30,18:40,19:00,21:25,21:25,22:42,22:50,13:15,14:15,173",
"06-23,NA,02:41,04:00,04:44,13:08,13:30,18:41,19:00,21:25,21:25,22:42,22:50,13:15,14:15,174",
"06-24,NA,02:42,04:00,04:44,13:08,13:15,18:41,19:00,21:25,21:25,22:42,22:50,13:15,14:15,175",
"06-25,NA,02:43,04:00,04:44,13:09,13:30,18:41,19:00,21:25,21:25,22:42,22:50,13:15,14:15,176",
"06-26,NA,02:43,04:00,04:45,13:09,13:30,18:41,19:00,21:25,21:25,22:42,22:50,13:15,14:15,177",
"06-27,NA,02:44,04:00,04:45,13:09,13:30,18:41,19:00,21:25,21:25,22:42,22:50,13:15,14:15,178",
"06-28,NA,02:45,04:00,04:46,13:09,13:30,18:41,19:00,21:24,21:24,22:42,22:50,13:15,14:15,179",
"06-29,NA,02:46,04:00,04:47,13:09,13:30,18:41,19:00,21:24,21:24,22:41,22:50,13:15,14:15,180",
"06-30,NA,02:49,04:00,04:47,13:10,13:30,18:41,19:00,21:24,21:24,22:41,22:50,13:15,14:15,181",
"07-01,NA,02:50,04:00,04:48,13:10,13:30,18:41,19:00,21:24,21:24,22:41,22:50,13:15,14:15,182",
"07-02,NA,02:51,04:00,04:49,13:10,13:30,18:40,19:00,21:23,21:23,22:40,22:50,13:15,14:15,183",
"07-03,NA,02:52,04:00,04:50,13:10,13:30,18:40,19:00,21:23,21:23,22:40,22:50,13:15,14:15,184",
"07-04,NA,02:52,04:00,04:50,13:10,13:30,18:40,19:00,21:22,21:22,22:39,22:50,13:15,14:15,185",
"07-05,NA,02:53,04:00,04:51,13:11,13:30,18:40,19:00,21:22,21:22,22:39,22:50,13:15,14:15,186",
"07-06,NA,02:55,04:00,04:52,13:11,13:30,18:40,19:00,21:21,21:21,22:38,22:50,13:15,14:15,187",
"07-07,NA,02:57,04:00,04:53,13:11,13:30,18:39,19:00,21:20,21:20,22:38,22:50,13:15,14:15,188",
"07-08,NA,02:58,04:00,04:54,13:11,13:30,18:39,19:00,21:20,21:20,22:36,22:45,13:15,14:15,189",
"07-09,NA,02:59,04:00,04:55,13:11,13:30,18:39,19:00,21:19,21:19,22:35,22:45,13:15,14:15,190",
"07-10,NA,03:01,04:00,04:56,13:11,13:30,18:38,19:00,21:18,21:18,22:35,22:45,13:15,14:15,191",
"07-11,NA,03:03,04:00,04:57,13:11,13:30,18:38,19:00,21:17,21:17,22:34,22:45,13:15,14:15,192",
"07-12,NA,03:04,04:00,04:58,13:11,13:30,18:38,19:00,21:16,21:16,22:33,22:45,13:15,14:15,193",
"07-13,NA,03:06,04:00,04:59,13:12,13:30,18:37,19:00,21:15,21:15,22:32,22:45,13:15,14:15,194",
"07-14,NA,03:07,04:00,05:01,13:12,13:30,18:37,19:00,21:14,21:14,22:31,22:45,13:15,14:15,195",
"07-15,NA,03:09,04:15,05:02,13:12,13:30,18:36,19:00,21:13,21:13,22:30,22:40,13:15,14:15,196",
"07-16,NA,03:11,04:15,05:03,13:12,13:30,18:36,19:00,21:12,21:12,22:29,22:40,13:15,14:15,197",
"07-17,NA,03:12,04:15,05:04,13:12,13:30,18:35,19:00,21:11,21:11,22:28,22:40,13:15,14:15,198",
"07-18,NA,03:14,04:15,05:06,13:12,13:30,18:34,19:00,21:10,21:10,22:27,22:40,13:15,14:15,199",
"07-19,NA,03:15,04:15,05:07,13:12,13:30,18:34,19:00,21:09,21:09,22:25,22:40,13:15,14:15,200",
"07-20,NA,03:16,04:15,05:08,13:12,13:30,18:33,19:00,21:07,21:07,22:24,22:40,13:15,14:15,201",
"07-21,NA,03:18,04:15,05:10,13:12,13:30,18:32,19:00,21:06,21:06,22:23,22:40,13:15,14:15,202",
"07-22,NA,03:20,04:15,05:11,13:12,13:30,18:32,19:00,21:05,21:05,22:22,22:30,13:15,14:15,203",
"07-23,NA,03:22,04:15,05:12,13:12,13:30,18:31,19:00,21:07,21:07,22:20,22:30,13:15,14:15,204",
"07-24,NA,03:24,04:15,05:14,13:12,13:30,18:30,19:00,21:02,21:02,22:19,22:30,13:15,14:15,205",
"07-25,NA,03:26,04:15,05:15,13:12,13:30,18:29,19:00,21:01,21:01,22:17,22:30,13:15,14:15,206",
"07-26,NA,03:28,04:15,05:17,13:12,13:30,18:28,19:00,20:59,20:59,22:15,22:30,13:15,14:15,207",
"07-27,NA,03:30,04:15,05:18,13:12,13:30,18:28,19:00,20:58,20:58,22:14,22:30,13:15,14:15,208",
"07-28,NA,03:31,04:15,05:19,13:12,13:30,18:27,19:00,20:56,20:56,22:12,22:30,13:15,14:15,209",
"07-29,NA,03:33,04:30,05:21,13:12,13:30,18:26,19:00,20:55,20:55,22:11,22:30,13:15,14:15,210",
"07-30,NA,03:35,04:30,05:22,13:12,13:30,18:25,19:00,20:53,20:53,22:09,22:30,13:15,14:15,211",
"07-31,NA,03:37,04:30,05:24,13:12,13:30,18:24,19:00,20:51,20:51,22:07,22:30,13:15,14:15,212",
"08-01,NA,03:39,04:30,05:25,13:12,13:30,18:23,19:00,20:50,20:50,22:06,22:30,13:15,14:15,213",
"08-02,NA,03:41,04:30,05:27,13:12,13:30,18:22,19:00,20:48,20:48,22:04,22:30,13:15,14:15,214",
"08-03,NA,03:43,04:30,05:29,13:12,13:30,18:21,19:00,20:46,20:46,22:02,22:30,13:15,14:15,215",
"08-04,NA,03:45,04:30,05:30,13:12,13:30,18:19,19:00,20:45,20:45,22:01,22:30,13:15,14:15,216",
"08-05,NA,03:47,04:30,05:32,13:12,13:30,18:18,18:45,20:43,20:43,21:59,22:15,13:15,14:15,217",
"08-06,NA,03:49,04:30,05:33,13:11,13:30,18:17,18:45,20:41,20:41,21:57,22:15,13:15,14:15,218",
"08-07,NA,03:51,04:30,05:35,13:11,13:30,18:16,18:45,20:39,20:39,21:55,22:15,13:15,14:15,219",
"08-08,NA,03:53,04:30,05:36,13:11,13:30,18:15,18:45,20:37,20:37,21:53,22:15,13:15,14:15,220",
"08-09,NA,03:55,04:30,05:38,13:11,13:30,18:14,18:45,20:35,20:35,21:52,22:15,13:15,14:15,221",
"08-10,NA,03:57,04:30,05:39,13:11,13:30,18:12,18:45,20:34,20:34,21:50,22:15,13:15,14:15,222",
"08-11,NA,03:59,04:30,05:41,13:11,13:30,18:11,18:45,20:32,20:32,21:48,22:15,13:15,14:15,223",
"08-12,NA,04:01,04:45,05:43,13:10,13:30,18:10,18:30,20:30,20:30,21:46,22:00,13:15,14:15,224",
"08-13,NA,04:03,04:45,05:44,13:10,13:30,18:08,18:30,20:28,20:28,21:44,22:00,13:15,14:15,225",
"08-14,NA,04:05,04:45,05:46,13:10,13:30,18:07,18:30,20:26,20:26,21:42,22:00,13:15,14:15,226",
"08-15,NA,04:07,04:45,05:47,13:10,13:30,18:06,18:30,20:24,20:24,21:40,22:00,13:15,14:15,227",
"08-16,NA,04:09,04:45,05:49,13:10,13:30,18:04,18:30,20:22,20:22,21:38,22:00,13:15,14:15,228",
"08-17,NA,04:11,04:45,05:51,13:09,13:30,18:03,18:30,20:20,20:20,21:36,22:00,13:15,14:15,229",
"08-18,NA,04:13,04:45,05:52,13:09,13:30,18:01,18:30,20:18,20:18,21:34,22:00,13:15,14:15,230",
"08-19,NA,04:15,05:00,05:54,13:09,13:30,18:00,18:15,20:16,20:16,21:32,21:45,13:15,14:15,231",
"08-20,NA,04:17,05:00,05:55,13:09,13:30,17:58,18:15,20:13,20:13,21:30,21:45,13:15,14:15,232",
"08-21,NA,04:19,05:00,05:57,13:08,13:30,17:57,18:15,20:11,20:11,21:28,21:45,13:15,14:15,233",
"08-22,NA,04:20,05:00,05:58,13:08,13:30,17:55,18:15,20:09,20:09,21:26,21:45,13:15,14:15,234",
"08-23,NA,04:22,05:00,06:00,13:08,13:30,17:54,18:15,20:07,20:07,21:23,21:45,13:15,14:15,235",
"08-24,NA,04:24,05:00,06:02,13:08,13:30,17:52,18:15,20:05,20:05,21:21,21:45,13:15,14:15,236",
"08-25,NA,04:26,05:00,06:03,13:07,13:30,17:50,18:15,20:03,20:03,21:19,21:45,13:15,14:15,237",
"08-26,NA,04:28,05:15,06:05,13:07,13:30,17:49,18:00,20:02,20:02,21:17,21:30,13:15,14:15,238",
"08-27,NA,04:30,05:15,06:06,13:07,13:30,17:47,18:00,19:58,19:58,21:15,21:30,13:15,14:15,239",
"08-28,NA,04:32,05:15,06:08,13:06,13:30,17:45,18:00,19:56,19:56,21:13,21:30,13:15,14:15,240",
"08-29,NA,04:34,05:15,06:10,13:06,13:30,17:44,18:00,19:54,19:54,21:10,21:30,13:15,14:15,241",
"08-30,NA,04:36,05:15,06:11,13:06,13:30,17:42,18:00,19:52,19:52,21:08,21:30,13:15,14:15,242",
"08-31,NA,04:38,05:15,06:13,13:06,13:30,17:40,18:00,19:50,19:50,21:06,21:30,13:15,14:15,243",
"09-01,NA,04:39,05:15,06:14,13:05,13:30,17:39,18:00,19:47,19:47,21:04,21:30,13:15,14:15,244",
"09-02,NA,04:41,05:30,06:16,13:05,13:15,17:37,17:45,19:45,19:45,21:01,21:15,13:15,14:15,245",
"09-03,NA,04:43,05:30,06:18,13:05,13:30,17:35,17:45,19:43,19:43,20:59,21:15,13:15,14:15,246",
"09-04,NA,04:45,05:30,06:19,13:04,13:30,17:33,17:45,19:41,19:41,20:57,21:15,13:15,14:15,247",
"09-05,NA,04:47,05:30,06:21,13:04,13:30,17:32,17:45,19:38,19:38,20:55,21:15,13:15,14:15,248",
"09-06,NA,04:49,05:30,06:22,13:04,13:30,17:30,17:45,19:36,19:36,20:52,21:15,13:15,14:15,249",
"09-07,NA,04:51,05:30,06:24,13:03,13:30,17:28,17:45,19:34,19:34,20:50,21:15,13:15,14:15,250",
"09-08,NA,04:53,05:30,06:26,13:03,13:30,17:26,17:45,19:32,19:32,20:48,21:15,13:15,14:15,251",
"09-09,NA,04:54,05:45,04:54,13:02,13:15,17:24,17:45,19:30,19:30,20:46,21:00,13:15,14:15,252",
"09-10,NA,04:56,05:45,06:29,13:02,13:30,17:22,17:45,19:27,19:27,20:43,21:00,13:15,14:15,253",
"09-11,NA,04:58,05:45,06:30,13:02,13:30,17:21,17:45,19:25,19:25,20:40,21:00,13:15,14:15,254",
"09-12,NA,05:00,05:45,06:32,13:01,13:30,17:19,17:45,19:22,19:22,20:39,21:00,13:15,14:15,255",
"09-13,NA,05:02,05:45,06:34,13:01,13:30,17:17,17:45,19:20,19:20,20:36,21:00,13:15,14:15,256",
"09-14,NA,05:04,05:45,06:35,13:01,13:30,17:15,17:45,19:18,19:18,20:34,21:00,13:15,14:15,257",
"09-15,NA,05:06,05:45,06:37,13:00,13:30,17:13,17:45,19:16,19:16,20:32,21:00,13:15,14:15,258",
"09-16,NA,05:08,05:45,06:38,13:00,13:15,17:11,17:30,19:13,19:13,20:30,20:45,13:15,14:15,259",
"09-17,NA,05:10,05:45,06:40,13:00,13:30,17:09,17:30,19:11,19:11,20:27,20:45,13:15,14:15,260",
"09-18,NA,05:12,05:45,06:41,12:59,13:30,17:07,17:30,19:09,19:09,20:25,20:45,13:15,14:15,261",
"09-19,NA,05:13,05:45,06:43,12:59,13:30,17:05,17:30,19:06,19:06,20:23,20:45,13:15,14:15,262",
"09-20,NA,05:15,05:45,06:45,12:59,13:30,17:03,17:30,19:04,19:04,20:20,20:45,13:15,14:15,263",
"09-21,NA,05:17,05:45,06:46,12:58,13:30,17:01,17:30,19:02,19:02,20:17,20:45,13:15,14:15,264",
"09-22,NA,05:18,05:45,06:48,12:58,13:30,16:59,17:30,18:59,18:59,20:16,20:45,13:15,14:15,265",
"09-23,NA,05:20,06:00,06:50,12:58,13:15,16:57,17:15,18:57,18:57,20:13,20:30,13:15,14:15,266",
"09-24,NA,05:21,06:00,06:51,12:57,13:30,16:55,17:15,18:55,18:55,20:11,20:30,13:15,14:15,267",
"09-25,NA,05:23,06:00,06:53,12:57,13:30,16:53,17:15,18:52,18:52,20:09,20:30,13:15,14:15,268",
"09-26,NA,05:25,06:00,06:54,12:57,13:30,16:51,17:15,18:50,18:50,20:06,20:30,13:15,14:15,269",
"09-27,NA,05:26,06:00,06:56,12:56,13:30,16:49,17:15,18:48,18:48,20:04,20:30,13:15,14:15,270",
"09-28,NA,05:28,06:00,06:58,12:56,13:30,16:47,17:15,18:46,18:46,20:02,20:30,13:15,14:15,271",
"09-29,NA,05:30,06:00,06:59,12:56,13:30,16:45,17:15,18:43,18:43,20:00,20:30,13:15,14:15,272",
"09-30,NA,05:31,06:15,07:01,12:55,13:15,16:43,17:00,18:41,18:41,19:57,20:15,13:15,14:15,273",
"10-01,NA,05:33,06:15,07:03,12:55,13:30,16:41,17:00,18:39,18:39,19:55,20:15,13:15,14:15,274",
"10-02,NA,05:34,06:15,07:04,12:55,13:30,16:39,17:00,18:36,18:36,19:53,20:15,13:15,14:15,275",
"10-03,NA,05:36,06:15,07:06,12:54,13:30,16:37,17:00,18:34,18:34,19:51,20:15,13:15,14:15,276",
"10-04,NA,05:38,06:15,07:07,12:54,13:30,16:35,17:00,18:32,18:32,19:48,20:15,13:15,14:15,277",
"10-05,NA,05:39,06:15,07:09,12:54,13:30,16:33,17:00,18:30,18:30,19:46,20:15,13:15,14:15,278",
"10-06,NA,05:41,06:15,07:11,12:53,13:30,16:31,17:00,18:28,18:28,19:44,20:15,13:15,14:15,279",
"10-07,NA,05:43,06:30,07:12,12:53,13:15,16:29,16:45,18:25,18:25,19:42,20:00,13:15,14:15,280",
"10-08,NA,05:44,06:30,07:14,12:53,13:30,16:28,16:45,18:23,18:23,19:39,20:00,13:15,14:15,281",
"10-09,NA,05:46,06:30,07:16,12:53,13:30,16:26,16:45,18:21,18:21,19:37,20:00,13:15,14:15,282",
"10-10,NA,05:48,06:30,07:17,12:52,13:30,16:24,16:45,18:19,18:19,19:35,20:00,13:15,14:15,283",
"10-11,NA,05:49,06:30,07:19,12:52,13:30,16:22,16:45,18:17,18:17,19:33,20:00,13:15,14:15,284",
"10-12,NA,05:51,06:30,07:21,12:52,13:30,16:20,16:45,18:14,18:14,19:31,20:00,13:15,14:15,285",
"10-13,NA,05:53,06:30,07:23,12:52,13:30,16:18,16:45,18:12,18:12,19:28,20:00,13:15,14:15,286",
"10-14,NA,05:55,06:30,07:24,12:51,13:15,16:16,16:30,18:10,18:10,19:26,19:45,13:15,14:15,287",
"10-15,NA,05:56,06:30,07:26,12:51,13:30,16:14,16:30,18:08,18:08,19:24,19:45,13:15,14:15,288",
"10-16,NA,05:58,06:30,07:28,12:51,13:30,16:12,16:30,18:06,18:06,19:22,19:45,13:15,14:15,289",
"10-17,NA,06:00,06:30,07:29,12:51,13:30,16:10,16:30,18:04,18:04,19:20,19:45,13:15,14:15,290",
"10-18,NA,06:01,06:30,07:31,12:51,13:30,16:08,16:30,18:02,18:02,19:18,19:45,13:15,14:15,291",
"10-19,NA,06:03,06:30,07:33,12:50,13:30,16:06,16:30,18:00,18:00,19:16,19:45,13:15,14:15,292",
"10-20,NA,06:04,06:30,07:35,12:50,13:30,16:04,16:30,17:58,17:58,19:14,19:45,13:15,14:15,293",
"10-21,NA,06:06,06:45,07:36,12:50,13:15,16:02,16:15,17:55,17:55,19:12,19:30,13:15,14:15,294",
"10-22,NA,06:08,06:45,07:38,12:50,13:30,16:00,16:15,17:53,17:53,19:10,19:30,13:15,14:15,295",
"10-23,NA,06:10,06:45,07:40,12:50,13:30,15:59,16:15,17:51,17:51,19:08,19:30,13:15,14:15,296",
"10-24,NA,06:11,06:45,07:41,12:50,13:00,15:57,16:15,17:50,17:50,19:06,19:30,13:15,14:15,297",
"10-25,NA,06:13,06:45,07:43,12:50,13:00,15:55,16:15,17:48,17:48,19:04,19:30,13:15,14:15,298",
"10-26,NA,06:15,06:45,07:45,12:50,13:00,15:53,16:15,17:46,17:46,19:02,19:30,13:15,14:15,299",
"10-27,NA,06:17,06:45,07:47,12:49,13:00,15:51,16:15,17:44,17:44,19:00,19:30,13:15,14:15,300",
"10-28,NA,06:19,06:45,07:48,12:49,13:15,15:50,16:15,17:42,17:42,18:58,19:30,13:15,14:15,301",
"10-29,NA,06:21,06:45,07:50,12:49,13:30,15:48,16:15,17:04,17:04,18:56,19:30,13:15,14:15,302",
"10-30,NA,05:23,05:45,06:52,11:49,13:00,14:46,15:15,16:38,16:38,17:54,18:30,12:20,13:00,303",
"10-31,NA,05:26,05:45,06:54,11:49,13:00,14:44,15:15,16:36,16:36,17:52,19:00,12:20,13:00,304",
"11-01,NA,05:28,05:45,06:56,11:49,13:00,14:43,15:15,16:35,16:35,17:51,19:00,12:20,13:00,305",
"11-02,NA,05:29,05:45,06:57,11:49,13:00,14:41,15:15,16:33,16:33,17:49,19:00,12:20,13:00,306",
"11-03,NA,05:31,05:45,06:59,11:49,13:00,14:39,15:15,16:31,16:31,17:47,19:00,12:20,13:00,307",
"11-04,NA,05:33,06:00,07:01,11:49,12:15,14:38,15:00,16:29,16:29,17:45,19:00,12:20,13:00,308",
"11-05,NA,05:35,06:00,07:03,11:49,13:00,14:36,15:00,16:28,16:28,17:44,18:00,12:20,13:00,309",
"11-06,NA,05:36,06:00,07:04,11:49,13:00,14:35,15:00,16:26,16:26,17:42,18:00,12:20,13:00,310",
"11-07,NA,05:38,06:00,07:06,11:49,13:00,14:33,15:00,16:24,16:24,17:40,19:00,12:20,13:00,311",
"11-08,NA,05:40,06:00,07:08,11:50,13:00,14:32,15:00,16:23,16:23,17:39,19:00,12:20,13:00,312",
"11-09,NA,05:42,06:00,07:10,11:50,13:00,14:30,15:00,16:21,16:21,17:37,19:00,12:20,13:00,313",
"11-10,NA,05:43,06:00,07:11,11:50,13:00,14:29,15:00,16:20,16:20,17:36,19:00,12:20,13:00,314",
"11-11,NA,05:44,06:15,07:13,11:50,12:15,14:27,14:45,16:18,16:18,17:34,19:00,12:20,13:00,315",
"11-12,NA,05:47,06:15,07:15,11:50,13:00,14:26,14:45,16:17,16:17,17:33,18:00,12:20,13:00,316",
"11-13,NA,05:49,06:15,07:17,11:50,13:00,14:25,14:45,16:15,16:15,17:31,18:00,12:20,13:00,317",
"11-14,NA,05:51,06:15,07:18,11:50,13:00,14:23,14:45,16:14,16:14,17:30,19:00,12:20,13:00,318",
"11-15,NA,05:53,06:15,07:20,11:51,13:00,14:22,14:45,16:13,16:13,17:29,19:00,12:20,13:00,319",
"11-16,NA,05:55,06:15,07:22,11:51,13:00,14:21,14:45,16:11,16:11,17:27,19:00,12:20,13:00,320",
"11-17,NA,05:57,06:15,07:23,11:51,13:00,14:20,14:45,16:10,16:10,17:26,19:00,12:20,13:00,321",
"11-18,NA,05:58,06:30,07:25,11:51,12:15,14:19,14:30,16:09,16:09,17:25,19:00,12:20,13:00,322",
"11-19,NA,06:00,06:30,07:27,11:51,13:00,14:18,14:30,16:08,16:08,17:24,18:00,12:20,13:00,323",
"11-20,NA,06:02,06:30,07:28,11:52,13:00,14:17,14:30,16:07,16:07,17:22,18:00,12:20,13:00,324",
"11-21,NA,06:04,06:30,07:30,11:52,13:00,14:15,14:30,16:06,16:06,17:21,19:00,12:20,13:00,325",
"11-22,NA,06:06,06:30,07:32,11:52,13:00,14:15,14:30,16:05,16:05,17:20,19:00,12:20,13:00,326",
"11-23,NA,06:07,06:30,07:33,11:52,13:00,14:14,14:30,16:04,16:04,17:19,19:00,12:20,13:00,327",
"11-24,NA,06:09,06:30,07:35,11:53,13:00,14:13,14:30,16:03,16:03,17:18,19:00,12:20,13:00,328",
"11-25,NA,06:10,06:45,07:36,11:53,12:15,14:12,14:30,16:02,16:02,17:17,19:00,12:20,13:00,329",
"11-26,NA,06:11,06:45,07:38,11:53,13:00,14:11,14:30,16:01,16:01,17:16,18:00,12:20,13:00,330",
"11-27,NA,06:12,06:45,07:39,11:54,13:00,14:10,14:30,16:00,16:00,17:16,18:00,12:20,13:00,331",
"11-28,NA,06:14,06:45,07:41,11:54,13:00,14:10,14:30,15:59,15:59,17:15,19:00,12:20,13:00,332",
"11-29,NA,06:15,06:45,07:42,11:54,13:00,14:09,14:30,15:59,15:59,17:14,19:00,12:20,13:00,333",
"11-30,NA,06:16,06:45,07:44,11:55,13:00,14:08,14:30,15:58,15:58,17:13,19:00,12:20,13:00,334",
"12-01,NA,06:17,06:45,07:45,11:55,13:00,14:08,14:30,15:57,15:57,17:13,19:00,12:20,13:00,335",
"12-02,NA,06:18,06:45,07:46,11:56,12:15,14:07,14:30,15:57,15:57,17:13,19:00,12:20,13:00,336",
"12-03,NA,06:20,06:45,07:48,11:56,13:00,14:07,14:30,15:56,15:56,17:13,18:00,12:20,13:00,337",
"12-04,NA,06:21,06:45,07:49,11:56,13:00,14:07,14:30,15:56,15:56,17:12,18:00,12:20,13:00,338",
"12-05,NA,06:22,06:45,07:50,11:57,13:00,14:06,14:30,15:56,15:56,17:12,19:00,12:20,13:00,339",
"12-06,NA,06:23,06:45,07:51,11:57,13:00,14:06,14:30,15:55,15:55,17:11,19:00,12:20,13:00,340",
"12-07,NA,06:25,06:45,07:52,11:58,13:00,14:06,14:30,15:55,15:55,17:11,19:00,12:20,13:00,341",
"12-08,NA,06:26,06:45,07:54,11:58,13:00,14:05,14:30,15:55,15:55,17:11,19:00,12:20,13:00,342",
"12-09,NA,06:27,06:45,07:55,11:59,12:15,14:05,14:30,15:55,15:55,17:11,19:00,12:20,13:00,343",
"12-10,NA,06:27,06:45,07:56,11:59,13:00,14:05,14:30,15:55,15:55,17:11,18:00,12:20,13:00,344",
"12-11,NA,06:28,06:45,07:57,12:00,13:00,14:05,14:30,15:54,15:54,17:11,18:00,12:20,13:00,345",
"12-12,NA,06:29,06:45,07:58,12:00,13:00,14:05,14:30,15:55,15:55,17:11,19:00,12:20,13:00,346",
"12-13,NA,06:30,06:45,07:58,12:01,13:00,14:05,14:30,15:55,15:55,17:11,19:00,12:20,13:00,347",
"12-14,NA,06:30,06:45,07:59,12:01,13:00,14:05,14:30,15:55,15:55,17:11,19:00,12:20,13:00,348",
"12-15,NA,06:30,06:45,08:00,12:01,13:00,14:06,14:30,15:55,15:55,17:11,19:00,12:20,13:00,349",
"12-16,NA,06:31,07:00,08:01,12:02,12:15,14:06,14:30,15:55,15:55,17:11,19:00,12:20,13:00,350",
"12-17,NA,06:31,07:00,08:02,12:02,13:00,14:06,14:30,15:55,15:55,17:11,18:00,12:20,13:00,351",
"12-18,NA,06:31,07:00,08:02,12:03,13:00,14:07,14:30,15:56,15:56,17:12,18:00,12:20,13:00,352",
"12-19,NA,06:32,07:00,08:03,12:03,13:00,14:07,14:30,15:56,15:56,17:12,19:00,12:20,13:00,353",
"12-20,NA,06:33,07:00,08:03,12:04,13:00,14:07,14:30,15:57,15:57,17:13,19:00,12:20,13:00,354",
"12-21,NA,06:33,07:00,08:04,12:04,13:00,14:08,14:30,15:57,15:57,17:13,19:00,12:20,13:00,355",
"12-22,NA,06:34,07:00,08:04,12:05,13:00,14:09,14:30,15:58,15:58,17:13,19:00,12:20,13:00,356",
"12-23,NA,06:34,07:00,08:05,12:05,12:15,14:09,14:30,15:58,15:58,17:13,19:00,12:20,13:00,357",
"12-24,NA,06:34,07:00,08:05,12:06,13:00,14:10,14:30,15:59,15:59,17:14,18:00,12:20,13:00,358",
"12-25,NA,06:35,07:00,08:05,12:06,13:00,14:11,14:30,16:00,16:00,17:15,18:00,12:20,13:00,359",
"12-26,NA,06:36,07:00,08:05,12:07,13:00,14:11,14:30,16:01,16:01,17:15,19:00,12:20,13:00,360",
"12-27,NA,06:37,07:00,08:06,12:07,13:00,14:12,14:30,16:01,16:01,17:16,19:00,12:20,13:00,361",
"12-28,NA,06:37,07:00,08:06,12:08,13:00,14:13,14:30,16:02,16:02,17:17,19:00,12:20,13:00,362",
"12-29,NA,06:37,07:00,08:06,12:08,13:00,14:14,14:30,16:03,16:03,17:18,19:00,12:20,13:00,363",
"12-30,NA,06:37,07:00,08:06,12:09,12:15,14:15,14:45,16:04,16:04,17:19,19:00,12:20,13:00,364",
"12-31,NA,06:37,07:00,08:06,12:09,13:00,14:16,14:45,16:06,16:06,17:20,18:00,12:20,13:00,365",
];
