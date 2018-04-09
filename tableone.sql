-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主機: localhost
-- 建立日期: Apr 02, 2018, 12:45 AM
-- 伺服器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 資料庫: `tableone`
--

-- --------------------------------------------------------

--
-- 資料表格式： `adv`
--

CREATE TABLE IF NOT EXISTS `adv` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 列出以下資料庫的數據： `adv`
--

INSERT INTO `adv` (`sid`, `url`) VALUES
(1, 'https://intl.rakuten-static.com/b/gs/en/common/img/logo-2lines.svg');

-- --------------------------------------------------------

--
-- 資料表格式： `big`
--

CREATE TABLE IF NOT EXISTS `big` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- 列出以下資料庫的數據： `big`
--

INSERT INTO `big` (`sid`, `url`) VALUES
(1, 'https://tshop.r10s.jp/rising-sun2010/cabinet/pon/ads22-6400-1.jpg?fitin=128:128'),
(2, 'https://tshop.r10s.jp/kutu-lead/cabinet/slip3-1.jpg?fitin=128:128'),
(3, 'https://tshop.r10s.jp/zinia/cabinet/zinn/imgrc0068219993.jpg?fitin=128:128'),
(4, 'https://tshop.r10s.jp/rising-sun2010/cabinet/timesale_pon/ads71-6699-1.jpg?fitin=128:128'),
(5, 'https://tshop.r10s.jp/evermall/cabinet/04917131/bo15107_28.jpg?fitin=128:128'),
(6, 'https://tshop.r10s.jp/outletshoes/cabinet/aa0sn/aa0sn-c16500_m2n.jpg?fitin=128:128'),
(7, 'https://tshop.r10s.jp/rising-sun2010/cabinet/pon/ads58-8200-1.jpg?fitin=128:128'),
(8, 'https://tshop.r10s.jp/e-zakkamania/cabinet/sale/s0323/26136-1601092.jpg?fitin=128:128'),
(9, 'https://tshop.r10s.jp/kutu-lead/cabinet/img10/con-as/ox-all1.jpg?fitin=128:128'),
(10, 'https://tshop.r10s.jp/rds/cabinet/converse/converse-02_11.jpg?fitin=128:128'),
(11, 'https://tshop.r10s.jp/rds/cabinet/converse/converse-02_11.jpg?fitin=128:128');

-- --------------------------------------------------------

--
-- 資料表格式： `canada`
--

CREATE TABLE IF NOT EXISTS `canada` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 列出以下資料庫的數據： `canada`
--

INSERT INTO `canada` (`sid`, `url`) VALUES
(1, 'https://tshop.r10s.jp/sneak/cabinet/shoes/nike5/nike-332550-603-sk-a.jpg?fitin=100:100'),
(2, 'https://tshop.r10s.jp/sneak/cabinet/shoes/nike5/nike-332550-603.jpg?fitin=100:100'),
(3, 'https://tshop.r10s.jp/sneak/cabinet/shoes/nike5/nike-332550-603-b1.jpg?fitin=100:100'),
(4, 'https://tshop.r10s.jp/sneak/cabinet/shoes/nike5/nike-332550-603-b2.jpg?fitin=100:100'),
(5, 'https://tshop.r10s.jp/sneak/cabinet/shoes/nike5/nike-332550-603-c.jpg?fitin=100:100'),
(6, 'https://tshop.r10s.jp/sneak/cabinet/shoes/nike5/nike-332550-603-d.jpg?fitin=100:100'),
(7, 'https://tshop.r10s.jp/sneak/cabinet/size-brand/nike-1200_size.jpg?fitin=100:100');

-- --------------------------------------------------------

--
-- 資料表格式： `hang`
--

CREATE TABLE IF NOT EXISTS `hang` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 列出以下資料庫的數據： `hang`
--

INSERT INTO `hang` (`sid`, `url`) VALUES
(1, 'https://intl.rakuten-static.com/b/gs/en/event/shop/coupon/img/840x417cn.gif'),
(2, 'https://intl.rakuten-static.com/b/gs/en/event/japan/area/tokyo/20180322/img/840x417cn.gif'),
(3, 'https://intl.rakuten-static.com/b/gs/en/event/shop/year/20180315/img/840x417cn.jpg'),
(4, 'https://intl.rakuten-static.com/b/gs/en/event/catalog/sakura/img/20180306/840x417cn.jpg'),
(5, 'https://intl.rakuten-static.com/b/gs/en/event/beauty/shiseido/20170831/img/840x417cn.jpg'),
(6, 'https://intl.rakuten-static.com/b/gs/en/img/bnr/ranking-840x417cn.jpg');

-- --------------------------------------------------------

--
-- 資料表格式： `info`
--

CREATE TABLE IF NOT EXISTS `info` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- 列出以下資料庫的數據： `info`
--

INSERT INTO `info` (`sid`, `url`) VALUES
(1, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-nike-624041-701.jpg'),
(2, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-bandlier.jpg'),
(3, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-shott.jpg'),
(4, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-shott.jpg'),
(5, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-campus.jpg'),
(6, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-nike-130690-005.jpg'),
(7, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-nike-384664-705.jpg'),
(8, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-nike-318429-003.jpg'),
(9, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-nike-325213-612.jpg'),
(10, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-churchs.jpg'),
(11, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-adi-cq2081.jpg'),
(12, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-nike-806809-001.jpg'),
(13, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-puma-355462-56.jpg'),
(14, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-puma-352634-66.jpg'),
(15, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-rbk-bd1502.jpg'),
(16, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-nf-171127-01.jpg'),
(17, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-nb-m1500gbg.jpg'),
(18, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-nike-624041-701.jpg'),
(19, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-nike-922845-200.jpg'),
(20, 'https://www.rakuten.ne.jp/gold/sneak/images/slider/920-690-nike-555088-710.jpg');

-- --------------------------------------------------------

--
-- 資料表格式： `japan`
--

CREATE TABLE IF NOT EXISTS `japan` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 列出以下資料庫的數據： `japan`
--

INSERT INTO `japan` (`sid`, `url`) VALUES
(1, 'https://image.rakuten.co.jp/sneak/cabinet/shoes/nike5/nike-332550-603.jpg'),
(2, 'https://image.rakuten.co.jp/sneak/cabinet/shoes/nike5/nike-332550-603-sk-a.jpg'),
(3, 'https://image.rakuten.co.jp/sneak/cabinet/size-brand/nike-1200_size.jpg');

-- --------------------------------------------------------

--
-- 資料表格式： `jiang`
--

CREATE TABLE IF NOT EXISTS `jiang` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- 列出以下資料庫的數據： `jiang`
--

INSERT INTO `jiang` (`sid`, `url`) VALUES
(1, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/topsell01.png'),
(2, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/topsell02.png'),
(3, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/topsell03.png'),
(7, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/topsell04.png'),
(8, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/topsell02.png'),
(9, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/topsell06.png'),
(10, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/topsell06.png'),
(11, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/topsell02.png'),
(12, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/topsell04.png'),
(13, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/topsell05.png'),
(14, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/topsell05.png');

-- --------------------------------------------------------

--
-- 資料表格式： `letian`
--

CREATE TABLE IF NOT EXISTS `letian` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  `tel` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 列出以下資料庫的數據： `letian`
--

INSERT INTO `letian` (`sid`, `username`, `password`, `tel`) VALUES
(2, 'asfsfgsaf', '123456', '15270209481'),
(3, 'asfsfgsaf', '123456', '15270209481'),
(4, 'asfsfgsaf', '123456', '建议使用常用手机'),
(5, 'jiangsong', '19961030', '18694479335'),
(6, 'songsong', '123456', '18296217900');

-- --------------------------------------------------------

--
-- 資料表格式： `shipin`
--

CREATE TABLE IF NOT EXISTS `shipin` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 列出以下資料庫的數據： `shipin`
--

INSERT INTO `shipin` (`sid`, `url`) VALUES
(1, 'https://image.rakuten.co.jp/sneak/cabinet/worldwideship.jpg');

-- --------------------------------------------------------

--
-- 資料表格式： `smaill`
--

CREATE TABLE IF NOT EXISTS `smaill` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 列出以下資料庫的數據： `smaill`
--

INSERT INTO `smaill` (`sid`, `url`) VALUES
(1, 'https://intl.rakuten-static.com/b/gs/en/event/shop/coupon/img/140x83cn.gif'),
(2, 'https://intl.rakuten-static.com/b/gs/en/event/japan/area/tokyo/20180322/img/140x83cn.gif'),
(3, 'https://intl.rakuten-static.com/b/gs/en/event/shop/year/20180315/img/140x83cn.jpg'),
(4, 'https://intl.rakuten-static.com/b/gs/en/event/catalog/sakura/img/20180306/140x83cn.jpg'),
(7, 'https://intl.rakuten-static.com/b/gs/en/event/beauty/shiseido/20170831/img/140x83cn.jpg'),
(8, 'https://intl.rakuten-static.com/b/gs/en/img/bnr/ranking-140x83cn.jpg');

-- --------------------------------------------------------

--
-- 資料表格式： `song`
--

CREATE TABLE IF NOT EXISTS `song` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 列出以下資料庫的數據： `song`
--

INSERT INTO `song` (`sid`, `url`) VALUES
(1, 'https://intl.rakuten-static.com/b/gs/en/img/bnr/rgx-rgm-330x220cn-1000coupon.png'),
(2, 'https://intl.rakuten-static.com/b/gs/en/help/customer-protection/img/bn/330x140cn.jpg'),
(3, 'https://intl.rakuten-static.com/b/gs/en/img/top/rgm-top-cn-wechat-normal.jpg'),
(4, 'https://intl.rakuten-static.com/b/gs/en/event/fcbarcelona/20170728/img/_pc/330x140en.jpg');

-- --------------------------------------------------------

--
-- 資料表格式： `thai`
--

CREATE TABLE IF NOT EXISTS `thai` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 列出以下資料庫的數據： `thai`
--

INSERT INTO `thai` (`sid`, `url`) VALUES
(1, 'https://tshop.r10s.jp/sneak/cabinet/shoes/nike5/nike-332550-603-sk-a.jpg?fitin=330:330'),
(2, 'https://tshop.r10s.jp/sneak/cabinet/shoes/nike5/nike-332550-603.jpg?fitin=330:330'),
(3, 'https://tshop.r10s.jp/sneak/cabinet/shoes/nike5/nike-332550-603-b1.jpg?fitin=330:330'),
(4, 'https://tshop.r10s.jp/sneak/cabinet/shoes/nike5/nike-332550-603-b2.jpg?fitin=330:330'),
(5, 'https://tshop.r10s.jp/sneak/cabinet/shoes/nike5/nike-332550-603-c.jpg?fitin=330:330'),
(6, 'https://tshop.r10s.jp/sneak/cabinet/shoes/nike5/nike-332550-603-d.jpg?fitin=330:330'),
(7, 'https://tshop.r10s.jp/sneak/cabinet/size-brand/nike-1200_size.jpg?fitin=330:330');

-- --------------------------------------------------------

--
-- 資料表格式： `wang`
--

CREATE TABLE IF NOT EXISTS `wang` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 列出以下資料庫的數據： `wang`
--

INSERT INTO `wang` (`sid`, `url`) VALUES
(1, 'https://intl.rakuten-static.com/b/gs/en/img/top/cn/a/category/head/cat_sports.jpg'),
(2, 'https://intl.rakuten-static.com/b/gs/en/img/top/cn/a/category/head/cat_kids.jpg'),
(3, 'https://intl.rakuten-static.com/b/gs/en/img/top/cn/a/category/head/cat_beauty.jpg'),
(4, 'https://intl.rakuten-static.com/b/gs/en/img/top/cn/a/category/head/cat_women.jpg');

-- --------------------------------------------------------

--
-- 資料表格式： `yu`
--

CREATE TABLE IF NOT EXISTS `yu` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- 列出以下資料庫的數據： `yu`
--

INSERT INTO `yu` (`sid`, `url`) VALUES
(1, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/featured01.jpg'),
(2, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/featured02.jpg'),
(3, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/featured03.jpg'),
(4, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/featured04.jpg'),
(5, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/featured05.jpg'),
(6, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/featured06.jpg'),
(7, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/featured02.jpg'),
(8, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/featured04.jpg'),
(9, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/featured06.jpg'),
(10, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/featured04.jpg'),
(11, 'https://intl.rakuten-static.com/b/gs/en/img/20180322/featured04.jpg');
