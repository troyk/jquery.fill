(function ($) {
	function mapElements($container, attrName) {
		var attrName_data = 'data-'+attrName,
	      cache = $container.data().fillAttrCache || ($container.data().fillAttrCache={}),
	      map = cache[attrName];
	  if (!map) {
			map = cache[attrName] = {};
			// go fast, use getElementsByTagName and for loop
			var elements = $container[0].getElementsByTagName('*'),
	        len = elements.length,
	        e = null, name = null;
      for (var i=0; i<len; i++) {
			  e = elements[i];
				name = e.name || (e.attributes[attrName_data] && e.attributes[attrName_data].value);
				if (name) {
					map[name] = $(e);
				}
			}
		}
		return map;
	}	

	function getValue($el) {
		switch($el[0].tagName) {
			case "INPUT":case "SELECT": case"TEXTAREA":
				return ($el.val());
			default:
				return ($el.text());
		}
	}
	function setValue($el, value) {
		switch($el[0].tagName) {
			case "INPUT":case "SELECT": case"TEXTAREA":
				return $el.val(value);
			default:
				return $el.html(value);
		}
	}

	function fillFromObj(attrName,$dest, obj) {
		var dstMap = mapElements($dest, attrName),
				srcMap = obj;
		for (var key in dstMap) {
			setValue(dstMap[key], (srcMap.hasOwnProperty(key) ? srcMap[key] : ""));
		}
	}

  function fillFromSelector(attrName,$dest, $src) {
		var dstMap = mapElements($dest, attrName),
				srcMap = mapElements($src, attrName);
		for (var key in dstMap) {
			setValue(dstMap[key], (srcMap.hasOwnProperty(key) ? getValue(srcMap[key]) : ""));
		}
	}

	$.fn.fill = function fill(src, attrName) {
		if (!attrName) { attrName = "name"; }
		(src instanceof $) ? fillFromSelector(attrName, this, src) : fillFromObj(attrName, this, src);
	  return this;
	};

}(jQuery));
