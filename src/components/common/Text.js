import React from "react";
import PropTypes from "prop-types";
import showdown from "showdown";

const createMarkup = (html) => {
  return { __html: html };
};

const Text = (props) => {
  const {
    children,
    className,
    tag,
    options,
    styles,
    noParsedText,
    ...otherProps
  } = props;

  if (typeof children !== "string" || noParsedText) {
    return (
      <props.tag className={className} {...otherProps}>
        {children}
      </props.tag>
    );
  }
  if (tag) {
    const noMorePsExt = {
      type: "output",
      filter: function (text, converter) {
        const re = /<\/?p[^>]*>/gi;
        text = text.replace(re, "");
        return text;
      },
    };
    const converter = new showdown.Converter({
      extensions: [noMorePsExt],
      ...options,
    });
    const html = converter.makeHtml(children);

    return (
      <props.tag
        dangerouslySetInnerHTML={createMarkup(html)}
        className={className}
        {...otherProps}
      />
    );
  }
};

Text.propTypes = {
  /**
   InnerHtml of the component
   */
  children: PropTypes.node.isRequired,
  /**
   Custom className
   */
  className: PropTypes.string,
  /**
   Tag to render
   */
  tag: PropTypes.string,
  /**
   Options: https://github.com/showdownjs/showdown#valid-options
  */
  options: PropTypes.shape({}),
  /** True if you want to have a none parsed text */
  noParsedText: PropTypes.bool,
};

Text.defaultProps = {
  className: "",
  tag: "p",
  noParsedText: false,
};

export default React.memo(Text);
