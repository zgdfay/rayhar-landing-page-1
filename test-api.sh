#!/bin/bash

BASE_URL="http://localhost:3000/api/form-visitors"
TIMESTAMP=$(date +%s)
TEST_EMAIL="test${TIMESTAMP}@example.com"
TEST_WHATSAPP="+6012345678"

echo "========================================="
echo "End-to-End Test untuk Form Visitors API"
echo "========================================="
echo ""

echo "1. Test: Insert data valid (Sukses)"
echo "-----------------------------------"
RESPONSE1=$(curl -s -X POST "$BASE_URL" \
  -H "Content-Type: application/json" \
  -d "{
    \"fullname\": \"Test User $TIMESTAMP\",
    \"email\": \"$TEST_EMAIL\",
    \"whatsapp\": \"$TEST_WHATSAPP\"
  }" \
  -w "\nHTTP_STATUS:%{http_code}")

echo "$RESPONSE1" | grep -v "HTTP_STATUS"
HTTP_STATUS1=$(echo "$RESPONSE1" | grep "HTTP_STATUS" | cut -d: -f2)
echo "Status Code: $HTTP_STATUS1"
echo ""

if [ "$HTTP_STATUS1" = "201" ]; then
  echo "✓ Test 1 PASSED"
else
  echo "✗ Test 1 FAILED"
fi
echo ""

echo "2. Test: Validasi - Field kosong"
echo "-----------------------------------"
RESPONSE2=$(curl -s -X POST "$BASE_URL" \
  -H "Content-Type: application/json" \
  -d "{
    \"fullname\": \"\",
    \"email\": \"test2@example.com\",
    \"whatsapp\": \"+6012345679\"
  }" \
  -w "\nHTTP_STATUS:%{http_code}")

echo "$RESPONSE2" | grep -v "HTTP_STATUS"
HTTP_STATUS2=$(echo "$RESPONSE2" | grep "HTTP_STATUS" | cut -d: -f2)
echo "Status Code: $HTTP_STATUS2"
echo ""

if [ "$HTTP_STATUS2" = "400" ]; then
  echo "✓ Test 2 PASSED"
else
  echo "✗ Test 2 FAILED"
fi
echo ""

echo "3. Test: Validasi - Format email tidak valid"
echo "-----------------------------------"
RESPONSE3=$(curl -s -X POST "$BASE_URL" \
  -H "Content-Type: application/json" \
  -d "{
    \"fullname\": \"Test User\",
    \"email\": \"invalid-email\",
    \"whatsapp\": \"+6012345679\"
  }" \
  -w "\nHTTP_STATUS:%{http_code}")

echo "$RESPONSE3" | grep -v "HTTP_STATUS"
HTTP_STATUS3=$(echo "$RESPONSE3" | grep "HTTP_STATUS" | cut -d: -f2)
echo "Status Code: $HTTP_STATUS3"
echo ""

if [ "$HTTP_STATUS3" = "400" ]; then
  echo "✓ Test 3 PASSED"
else
  echo "✗ Test 3 FAILED"
fi
echo ""

echo "4. Test: Validasi - Format WhatsApp tidak valid"
echo "-----------------------------------"
RESPONSE4=$(curl -s -X POST "$BASE_URL" \
  -H "Content-Type: application/json" \
  -d "{
    \"fullname\": \"Test User\",
    \"email\": \"test4@example.com\",
    \"whatsapp\": \"12345678\"
  }" \
  -w "\nHTTP_STATUS:%{http_code}")

echo "$RESPONSE4" | grep -v "HTTP_STATUS"
HTTP_STATUS4=$(echo "$RESPONSE4" | grep "HTTP_STATUS" | cut -d: -f2)
echo "Status Code: $HTTP_STATUS4"
echo ""

if [ "$HTTP_STATUS4" = "400" ]; then
  echo "✓ Test 4 PASSED"
else
  echo "✗ Test 4 FAILED"
fi
echo ""

echo "5. Test: Duplicate Email"
echo "-----------------------------------"
RESPONSE5=$(curl -s -X POST "$BASE_URL" \
  -H "Content-Type: application/json" \
  -d "{
    \"fullname\": \"Another User\",
    \"email\": \"$TEST_EMAIL\",
    \"whatsapp\": \"+6012345680\"
  }" \
  -w "\nHTTP_STATUS:%{http_code}")

echo "$RESPONSE5" | grep -v "HTTP_STATUS"
HTTP_STATUS5=$(echo "$RESPONSE5" | grep "HTTP_STATUS" | cut -d: -f2)
echo "Status Code: $HTTP_STATUS5"
echo ""

if [ "$HTTP_STATUS5" = "400" ]; then
  echo "✓ Test 5 PASSED"
else
  echo "✗ Test 5 FAILED"
fi
echo ""

echo "6. Test: Duplicate WhatsApp"
echo "-----------------------------------"
RESPONSE6=$(curl -s -X POST "$BASE_URL" \
  -H "Content-Type: application/json" \
  -d "{
    \"fullname\": \"Another User\",
    \"email\": \"test6@example.com\",
    \"whatsapp\": \"$TEST_WHATSAPP\"
  }" \
  -w "\nHTTP_STATUS:%{http_code}")

echo "$RESPONSE6" | grep -v "HTTP_STATUS"
HTTP_STATUS6=$(echo "$RESPONSE6" | grep "HTTP_STATUS" | cut -d: -f2)
echo "Status Code: $HTTP_STATUS6"
echo ""

if [ "$HTTP_STATUS6" = "400" ]; then
  echo "✓ Test 6 PASSED"
else
  echo "✗ Test 6 FAILED"
fi
echo ""

echo "========================================="
echo "Test Selesai"
echo "========================================="

