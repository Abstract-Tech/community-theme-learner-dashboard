import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { courseShape, courseTypeToProductTypeMap } from '../utils';
import ProductCard from './ProductCard';
import ProductCardHeader from './ProductCardHeader';

const ProductCardContainer = ({ finalProductList, courseTypes }) => (
  <div className="product-card-container d-flex">
    {finalProductList
      && courseTypes.map((type) => (
        <div key={type}>
          <ProductCardHeader courseType={type} />
          <div
            className={classNames({
              'course-subcontainer': type === 'Course',
            })}
          >
            {finalProductList
              .filter((course) => courseTypeToProductTypeMap[course.courseType] === type)
              .map((item) => (
                <ProductCard
                  key={item.title}
                  url={`https://www.edx.org/${item.prospectusPath}`}
                  title={item.title}
                  subtitle={item.owners[0].name}
                  headerImage={item.image.src}
                  schoolLogo={item.owners[0].logoImageUrl}
                  courseType={type}
                />
              ))}
          </div>
        </div>
      ))}
  </div>
);

ProductCardContainer.propTypes = {
  finalProductList: PropTypes.arrayOf(
    PropTypes.shape(courseShape),
  ).isRequired,
  courseTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductCardContainer;
